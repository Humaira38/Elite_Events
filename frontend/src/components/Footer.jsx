import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer>
      <div className="content">
        {/* Contact Information */}
        <div className="section">
          <h4>Contact Us</h4>
          <p>Email: eliteevents@gmail.com</p>
          <p>Phone:01877766670,01877766680 </p>
          <p>Address: 453/B-1,Road no-1,Zakir Hossain Road,Chittagong</p>
        </div>

        {/* Services or About Section */}
        <div className="section">
          <h4>About Us</h4>
          <p>Elite Events specializes in creating unforgettable events tailored to your vision.</p>
         
        </div>

        {/* Social Media Links */}
        <div className="section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; 2024 Elite Events. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
