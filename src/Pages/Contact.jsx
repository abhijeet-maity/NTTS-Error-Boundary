import React from 'react';
import "../App.css";

const Contact = () => {

  console.log("Contact Page");

  return (
    <div className='container'>
      <h1 className='heading'>Contact Us</h1>
      
      <div className='section'>
        <h2>📍 Address</h2>
        <p>1234 Elm Street, Suite 567, Tech City, Innovation State, 98765, Country</p>
      </div>

      <div className='section'>
        <h2>📞 Phone Numbers</h2>
        <p>General Inquiries: +1 (555) 123-4567</p>
        <p>Customer Support: +1 (555) 234-5678</p>
        <p>Business Collaborations: +1 (555) 345-6789</p>
      </div>

      <div className='section'>
        <h2>🕒 Business Hours</h2>
        <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday – Sunday: Closed</p>
      </div>

    </div>
  )
}

export default Contact