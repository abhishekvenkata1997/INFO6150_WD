import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

function Contact() {

  return (
    <div className="contact-container">
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
      <div className="contact-content">
        <div className="row">
          <div className="col-md-12">
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="contact-description">
              <h1>Contact Us</h1>
              <p>Have any questions, comments or concerns? Contact us below and we'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="inputSubject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="inputSubject" placeholder="Enter the subject" required />
              </div>
              <div className="mb-3">
                <label htmlFor="inputMessage" className="form-label">Message</label>
                <textarea className="form-control" id="inputMessage" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
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
      </div>
  );
}
export default Contact;




