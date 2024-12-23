const db = require('@supabase/supabase-js'); // Import Supabase client
const supabase=require('../config/db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const jwt=require("jsonwebtoken")
const fs = require('fs').promises; 
// Helper function to upload files to Supabase bucket
const sanitizeFileName = (fileName) => {
  // Replace non-ASCII characters with an underscore or remove them
  return fileName.replace(/[^a-zA-Z0-9.-_]/g, '_');
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function uploadToBucket(storeid, bucketName, filePath, fileName, productId) {
  try {
    const randomNumber = random(1, 100000000); // Generate a random number for uniqueness

    // Sanitize the file name to avoid invalid characters
    const sanitizedFileName = `${productId}-${randomNumber}-${fileName.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;

    // Read the file data
    const fileData = await fs.readFile(filePath);

    // Upload the file to Supabase bucket with the unique name
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(sanitizedFileName, fileData);

    if (error) throw error;

    // Get the public URL for the uploaded file
    const publicUrl = supabase.storage.from(bucketName).getPublicUrl(sanitizedFileName);
    console.log(publicUrl);
    return publicUrl.data.publicUrl;
  } catch (err) {
    console.error('Error uploading file:', err);
    throw err;
  }
}
const saveProduct = async (req, res) => {
  console.log("prdd")
  const { productName, price, stock, description, category } = req.body;
  const imageFiles = req.files["image"];  // Get image files from the request (array of files)
  const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Authorization' header (Bearer <token>)

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId; // Get the userId from the token payload
  console.log("USR"+userId);
  // Query the 'stores' table to get the 'storeid' based on 'userid'
  const { data: storeData, error: storeError } = await supabase
    .from('stores')
    .select('storeid')
    .eq('userid', userId) // Match userid in the stores table
    .single(); 
 
    const storeId = storeData.storeid;  // Store ID from the stores table

  try {
    // Insert product into the "products" table
    const { data: productInsert, error: productError } = await supabase
      .from("products")
      .insert([
        {
          storeid: storeId,
          name: productName,
          price: price,
          stock: stock,
          description: description,
        },
      ])
      .select("productid");

    if (productError) throw productError;

    const productId = productInsert[0].productid;
    let imageUrls = [];

    // If images are provided, upload them to the bucket and insert into the "productimages" table
    if (imageFiles && imageFiles.length > 0) {
      for (const imageFile of imageFiles) {
        const imageUrl = await uploadToBucket(storeId, "products", imageFile.path, imageFile.originalname, productId);
        imageUrls.push(imageUrl);

        // Insert image URL into the "productimages" table
        const { data: imageInsert, error: imageError } = await supabase
          .from("productimages")
          .insert([
            {
              productid: productId,
              imageurl: imageUrl,
            },
          ]);

        if (imageError) throw imageError;
      }
    }

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      productId: productId,
      imageUrls: imageUrls,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Failed to add product.", error });
  } finally {
    // Clean up uploaded files
    if (imageFiles && imageFiles.length > 0) {
      for (const imageFile of imageFiles) {
        await fs.unlink(imageFile.path);
      }
    }
  }
};
const getBanners=async (req, res) => {
  try {
    const { storeId } = req.body;  // Get storeId from request body

    // Query the banners associated with the storeId
    const { data: banners, error } = await supabase
      .from('banners')
      .select('bannerid, imageurl, alttext')
      .eq('storeid', storeId);

    if (error) {
      throw error;
    }

    // Return the banners data
    res.json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ error: 'Failed to fetch banners' });
  }
}
const getTheme=async (req, res) => {
  try {
    const { storeId } = req.body;
    console.log(storeId)
    // Step 1: Fetch the store details including the themeid
    const { data: storeData, error: storeError } = await supabase
      .from('stores')
      .select('storename, themeid')
      .eq('storeid', storeId)
      .single(); // .single() to fetch a single row
    console.log(storeData)
    if (storeError) {
      throw storeError;
    }

    // Step 2: If the store is found, fetch the theme details using themeid
    if (!storeData) {
      return res.status(404).json({ error: 'Store not found' });
    }

    const { themeid, storename } = storeData;

    const { data: themeData, error: themeError } = await supabase
      .from('themes')
      .select('primarycolor, secondarycolor, backgroundcolor, textcolor, fontstyle')
      .eq('themeid', themeid)
      .single(); // Fetch single theme data based on themeid

    if (themeError) {
      throw themeError;
    }

    if (!themeData) {
      return res.status(404).json({ error: 'Theme not found for this store' });
    }

    // Step 3: Send the store name and theme data in the response
    res.json({
      storename: storename,
      theme: themeData,
    });
  } catch (error) {
    console.error('Error fetching store and theme data:', error);
    res.status(500).json({ error: 'Failed to fetch store and theme data' });
  }
}
// Controller function to save store data
const saveStore = async (req, res) => {
  const {
    storeType,
    storeName,
    storeDescription,
    slogan,
    primaryColor,
    secondaryColor,
    background,
    textColor,
    fontStyle,
    headlines,
  } = req.body;
  console.log(req.files);
  const logoFile = req.files["logo"]?.[0];
  const bannerFiles = req.files["banners"] || [];

  try {
    // Step 1: Upload logo to bucket and get URL
    let logoUrl = null;
    if (logoFile) {
      logoUrl = await uploadToBucket("logos", logoFile.path, logoFile.originalname);
    }

    // Step 2: Insert into Themes table
    const {data:themeInsert,error} = await supabase
      .from("themes")
      .insert([
        {
          
          primarycolor: primaryColor,
          secondarycolor: secondaryColor,
          backgroundcolor: background,
          textcolor: textColor,
          fontstyle: fontStyle,
        },
      ])
      .select("themeid");
      console.log(themeInsert)

    if (error) throw error;
    const themeId = themeInsert[0].themeid;

    // Step 3: Insert into Logos table if logo exists
    let logoId = null;
    if (logoUrl) {
      const logoInsert = await supabase
        .from("logos")
        .insert([{ logourl: logoUrl }])
        .select("logoid");

      if (logoInsert.error) throw logoInsert.error;
      logoId = logoInsert[0].logoid;
    }
    const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Authorization' header (Bearer <token>)

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret here
    console.log(decoded)
    const userId = decoded.userId; // Assuming the 'userid' is in the token payload

    // Step 4: Insert into Stores table
    const storeInsert = await supabase
      .from("stores")
      .insert([
        {
          storename: storeName,
          storedescription: storeDescription,
          slogan: slogan,
          logoid: logoId,
          themeid: themeId,
          userid:userId
        },
      ])
      .select("storeid");

    if (storeInsert.error) throw storeInsert.error;
    const storeId = storeInsert.data[0].storeid;
    let Parsedheadlines = JSON.parse(headlines);
    // Step 5: Insert into Headlines table
    if (Array.isArray(Parsedheadlines) && Parsedheadlines.length > 0) {
        const headlineData = Parsedheadlines.map((headline) => ({
          storeid: storeId,
          content: headline.text,
        }));
      
        const headlineInsert = await supabase.from("headlines").insert(headlineData);
        if (headlineInsert.error) throw headlineInsert.error;
      } else {
        console.error('Headlines is not an array or is empty');
      }
    // Step 6: Upload banners to bucket and save URLs in Banners table
    if (bannerFiles.length > 0) {
      const bannerData = await Promise.all(
        bannerFiles.map(async (file) => {
          const bannerUrl = await uploadToBucket(storeId,"banners", file.path, file.originalname);
          return {
            storeid: storeId,
            imageurl: bannerUrl,
            alttext: file.originalname || "",
          };
        })
      );

      const bannerInsert = await supabase.from("banners").insert(bannerData);
      if (bannerInsert.error) throw bannerInsert.error;
    }

    res.status(200).json({ success: true, message: "Store data saved successfully." });
  } catch (error) {
    console.error("Error saving store data:", error);
    res.status(500).json({ success: false, message: "Failed to save store data.", error });
  } finally {
    // Clean up uploaded files
    if (logoFile) await fs.unlink(logoFile.path);
    for (const file of bannerFiles) {
      await fs.unlink(file.path);
    }
  }
};
const getDashboardStats = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Authorization' header (Bearer <token>)

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId; // Get the userId from the token payload
    console.log("USR"+userId);
    // Query the 'stores' table to get the 'storeid' based on 'userid'
    const { data: storeData, error: storeError } = await supabase
      .from('stores')
      .select('storeid')
      .eq('userid', userId) // Match userid in the stores table
      .single(); 
   
      const {storeId} =req.body;  // Store ID from the stores table
    

    // Fetch total orders for the store
    const { data: orders, error: ordersError } = await supabase
      .from('orders')
      .select('orderid')
      .eq('storeid', storeId);
    if (ordersError) throw ordersError;

    // Calculate total revenue for the store
    const { data: revenue, error: revenueError } = await supabase
      .from('orders')
      .select('totalamount')
      .eq('storeid', storeId);
    if (revenueError) throw revenueError;

    // Fetch unique customer count for the store
    const { data: customers, error: customersError } = await supabase
      .from('orders')
      .select('userid', { distinct: true })
      .eq('storeid', storeId);
    if (customersError) throw customersError;

    // Fetch the number of products for the store
    const { data: products, error: productsError } = await supabase
  .from('products')
  .select('*, productimages(imageurl)')  // Assuming `image_url` is the field in productimages table
  .eq('storeid', storeId);
    if (productsError) throw productsError;
    console.log(products)
    res.json({
      orders: orders.length,
      revenue: revenue.reduce((sum, order) => sum + parseFloat(order.totalamount), 0).toFixed(2),
      customers: customers.length,
      products: products, // Adding product count
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats.' });
  }
};


module.exports = { saveStore,getDashboardStats,saveProduct,getTheme ,getBanners};
