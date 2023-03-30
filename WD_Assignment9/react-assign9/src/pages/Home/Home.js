import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import image2 from '../Home/coffee2.png';

function Home() {
  return (
    <div className="home-container">
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
                <Link to="/Contact" className="nav-link">Contact</Link>
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
      <div className="home-content">
        <div className="row">
          <div className="col-md-12">
          <img src={image2} alt="Coffee1" className="img-fluid home-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="home-description">
              <h1>The Perfect Cup, Every Time</h1>
              <p>At Café Connect, we're dedicated to providing our customers with the best coffee experience possible. 
              Our coffee beans are carefully selected and roasted to perfection, ensuring that every cup is full of flavor and aroma. 
              From our classic drip coffee to our signature espresso drinks, we have something for every coffee lover.</p>
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
              <p>Order Online</p>
              <p>Gift Cards
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;