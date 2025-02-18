import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h3 style={styles.logo}>
        <Link to="/" style={styles.navLink}>
          Logo
        </Link>
      </h3>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>
            Contact
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.navLink}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "15px 30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "inline-block",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    transition: "0.3s ease-in-out",
    borderRadius: "5px",
  },
  navLinkHover: {
    backgroundColor: "#555",
  },
};

export default Navbar;
