import React from 'react';
import { FaFacebook,  FaGooglePlusG, FaInstagram, FaGithub, FaTiktok, FaPhone } from 'react-icons/fa'; // Import the required icons
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <ul>
            <li>CONTACT NUMBER</li>
            <li>+977-9848206910</li>
            <li>+977-9822683177</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Services</li>
            <li>Apps & Web Development</li>
            <li>Manage & Repair</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Email</li>
            <li>bipinchaulagain13@gmail.com</li>
            <li>bipinchaulagain@gmail.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
          <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Project</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <div className="social-icons">
          <span className="icon"><FaFacebook /></span> {/* Facebook */}
          <span className="icon"><FaTiktok /></span> {/* Twitter */}
          <span className="icon"><FaGithub /></span> {/* RSS */}
          <span className="icon"><FaGooglePlusG /></span> {/* Google+ */}
          <span className="icon"><FaInstagram /></span> {/* Instagram */}
          <span className="icon"><FaPhone /></span> {/* phone */}
        </div>
        <p>Bipin Chaulagain</p>
        <p>© Copyright. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
