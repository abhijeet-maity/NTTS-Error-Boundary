import React from 'react';
import { Error } from '../Components/Error';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Dashboard</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Users</h3>
          <p>Manage user profiles and settings</p>
        </div>
        <div style={styles.card}>
          <h3>Analytics</h3>
          <p>View website traffic and reports</p>
        </div>
        <div style={styles.card}>
          <h3>Settings</h3>
          <p>Adjust preferences and configurations</p>
        </div>
        <div style={styles.card}>
          <h3>Messages</h3>
          <p>Check and respond to user messages</p>
        </div>
      </div>

      <Error />
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f3f4f6, #e0e7ff)',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    borderLeft: '6px solid #4a90e2',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: '#7f8c8d',
  },
  cardIcon: {
    fontSize: '40px',
    color: '#4a90e2',
    position: 'absolute',
    top: '10px',
    right: '10px',
    opacity: '0.2',
  },
};


export default Dashboard;
