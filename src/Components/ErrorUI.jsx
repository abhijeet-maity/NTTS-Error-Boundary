import React from 'react'

const ErrorUI = () => {

  
  return (
    <div>
        <div style={styles.container}>
          <h1>Oops! Something went wrong. 😢</h1>
          <p>We encountered an unexpected error. Please try again later.</p>
          <button onClick={() => window.location.reload()} style={styles.button}>
            Reload Page
          </button>
        </div>
    </div>
  )
}

const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      backgroundColor: "#f8d7da",
      color: "#721c24",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "50px auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    },
}

export default ErrorUI