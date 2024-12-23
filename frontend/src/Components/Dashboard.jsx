import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import CONSTANT_URL from "../../constants";
import { data } from "autoprefixer";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ orders: 0, revenue: "$0", customers: 0 });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Assuming userId is present in the payload
    
        const response = await fetch(`${CONSTANT_URL}/api/store/dashboard`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({storeId: userId }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await response.json();
        console.log(data.products)
        setStats({
          orders: data.orders,
          revenue: `$${data.revenue.toFixed(2)}`,
          customers: data.customers,
        });
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div style={styles.container}>
        {products}
      <h1 style={styles.header}>Seller Dashboard</h1>
      <p style={styles.description}>Welcome to your dashboard! Manage your store and monitor your performance.</p>

      <div style={styles.statsContainer}>
        {loading ? (
          <p>Loading stats...</p>
        ) : (
          <>
            <div style={styles.statCard}>
              <h2 style={styles.statTitle}>Orders</h2>
              <p style={styles.statValue}>{stats.orders}</p>
            </div>
            <div style={styles.statCard}>
              <h2 style={styles.statTitle}>Revenue</h2>
              <p style={styles.statValue}>{stats.revenue}</p>
            </div>
            <div style={styles.statCard}>
              <h2 style={styles.statTitle}>Customers</h2>
              <p style={styles.statValue}>{stats.customers}</p>
            </div>
          </>
        )}
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Add New Products</h2>
        <p style={styles.cardDescription}>
          Click the button below to add products to your inventory.
        </p>
        <button style={styles.button} onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <div style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>Your Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Price</th>
                <th style={styles.tableHeader}>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={styles.tableCell}>{product.productid}</td>
                  <td style={styles.tableCell}>{product.name}</td>
                  <td style={styles.tableCell}>{product.price}</td>
                  <td style={styles.tableCell}>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#1A1A1D',
    color: '#D3D3D3',
    fontFamily: `'Georgia', serif`,
    minHeight: '100vh',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#D3D3D3',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px',
  },
  statCard: {
    backgroundColor: '#2A2A2D',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  statTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#6A1E55',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#2A2A2D',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#6A1E55',
  },
  cardDescription: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#6A1E55',
    color: '#D3D3D3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  productsSection: {
    width: '100%',
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#333333',
    color: '#D3D3D3',
    padding: '10px',
    textAlign: 'left',
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #444',
  },
};

export default Dashboard;
