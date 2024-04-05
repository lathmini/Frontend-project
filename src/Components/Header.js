import React from 'react'
import Logo from '../Components/images/Logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
            {/* Verify if Logo is imported correctly */}
            <img src={Logo} alt="Logo" height="30" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">SERVICES</a>
            </li>
         
            <li className="nav-item">
              <a href="#" className="nav-link">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">CAREERS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
   
}
