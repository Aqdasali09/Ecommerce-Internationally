const express = require("express");
const multer = require("multer");
const { saveStore,getDashboardStats,saveProduct, getTheme, getBanners } = require("../controllers/storeController");

const router = express.Router();

// Multer configuration for handling file uploads
const upload = multer({ dest: "uploads/" });

// Define routes
router.post("/save-store", upload.fields([{ name: "logo" }, { name: "banners" }]), saveStore);
router.post("/dashboard",getDashboardStats);
router.post("/save-product", upload.fields([{ name: "image" }]), saveProduct);
router.post('/theme', getTheme);
router.post('/banners', getBanners);

module.exports = router;
