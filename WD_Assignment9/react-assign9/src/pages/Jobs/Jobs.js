import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./Jobs.css";
import image from '../Jobs/barista.png';
function Jobs() {
  const jobsData = [
    {
      id: 1,
      images: image,
      title: "Barista",
      location: "New York, NY",
      description: "We're looking for an experienced barista to join our team. Must have at least 2 years of experience in a high-volume coffee shop.",
      requirements: "Must be able to work early mornings and weekends.",
      applyLink: "https://www.example.com/apply/barista"
    },
    {
      id: 2,
      images: image,
      title: "Shift Supervisor",
      location: "San Francisco, CA",
      description: "We're seeking a shift supervisor to lead our team of baristas. Must have excellent leadership skills and experience managing a team.",
      requirements: "Must be able to work flexible hours, including nights and weekends.",
      applyLink: "https://www.example.com/apply/supervisor"
    },
    {
      id: 3,
      images: image,
      title: "Assistant Manager",
      location: "Chicago, IL",
      description: "We're looking for an assistant manager to help run our coffee shop. Must have at least 3 years of experience in a management role.",
      requirements: "Must be able to work weekends and holidays.",
      applyLink: "https://www.example.com/apply/manager"
    }
  ];

  return (
    <div className="jobs-container">
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
      <div className="jobs-content">
        <div className="row">
          <div className="col-md-12">
            <h1>Current Job Openings</h1>
          </div>
        </div>
        {jobsData.map(job => (
          <div className="row job" key={job.id}>
            <div className="col-md-4">
              <h3>{job.title}</h3>
              <img src={job.images} alt='barista'></img>
              <p>{job.location}</p>
            </div>
            <div className="col-md-8">
              <p>{job.description}</p>
              <p><strong>Requirements:</strong> {job.requirements}</p>
              <p>{job.description}</p>
              <p><strong>Requirements:</strong> {job.requirements}</p>
            </div>
          </div>
      )
    )};
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
          <p>Gift Cards</p>
        </div>
      </div>
    </div>
  </footer>
</div>);
}

export default Jobs;
