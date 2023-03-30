import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Contact from '../Contact/Contact';
import './About.css'
import image from './about-img.png'

function About() {
  return (
    <div className="about-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Café Connect</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/jobs" className="nav-link">Jobs</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="about-content">
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt="image text"></img>
          </div>
          <div className="col-md-6">
            <div className="about-description">
              <h1>About Café Connect</h1>
              <p>Café Connect was founded in 2010 with the goal of providing customers with the best coffee experience possible. 
              Since then, we have grown into a nationwide chain of coffee shops, with locations in every major city. 
              Our dedication to quality and customer satisfaction has been the key to our success.</p>
              <p>At Café Connect, we believe that great coffee starts with great beans. 
              That's why we only use the finest coffee beans from around the world, carefully roasted to perfection. 
              Our skilled baristas then craft each cup with care, ensuring that every customer gets the perfect cup of coffee, every time.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>Monday-Friday 9:00 AM to 5:00 PM EST</p>
              <p>Email: customerservice@cafeconnect.com</p>
            </div>
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>Our Story</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
            <div className="col-md-4">
              <h3>Quick Links</h3>
              <p>Join Our Rewards Program</p>
              <p>Order Online</p><p>Join Our Rewards Program</p>
            <p>Order Online</p>
            <p>Gift Cards</p>
          </div>
        </div>
        </div>
  </footer>
  </div>

  );
}

export default About;

