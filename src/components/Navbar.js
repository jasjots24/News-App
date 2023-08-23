import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'2px'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          InsightFeed
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link active zoom-in" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item mx-4" style={{color:'white'}}>
              <Link className="nav-link zoom-in" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link zoom-in" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
