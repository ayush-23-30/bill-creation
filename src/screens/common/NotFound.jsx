import React from "react";
import { Navigate } from "react-router-dom";
import error from '../../assets/error.jpg'

// 404 Page UI
function NotFound() {
  return (
    <div style={styles.container} className="flex  flex-col justify-center items-center ">
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <img
        src={error}
        alt="404 Error"
        style={styles.image}
      />
      <p style={styles.message}>Oops! The page you are looking for doesn't exist.</p>
      <button
        onClick={() => window.location.href = '/dashboard'} // Navigate to dashboard
        style={styles.button}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

// Inline Styles for the NotFound Page UI
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",

  },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: "300px",
    margin: "20px 0",
  },
  message: {
    fontSize: "18px",
    color: "#777",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
  },
};

export default NotFound;
