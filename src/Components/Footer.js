import React from 'react'
import './footer.css';
import Logo from '../Components/images/Logo.png'; 

export default function Footer() {
  
       return (
   
        
      
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">

          <img src={Logo} alt="Logo" height="30" />
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a 
                single objective - your business results.</p>
          
          </div>
         

          <div class="footer-section1">
          <h3>Our Technologies</h3>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
            </div>

            <div class="footer-section2">
            <h3>Our Services</h3>
        
            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>

        
            
            <p>Privacy Policy | Terms & Conditions</p>
             
          </div>
     
      </footer>
 );
    
}
