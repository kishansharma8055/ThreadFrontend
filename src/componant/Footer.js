import React from 'react';
import './Footers.css';

const Footer = () => {
  return (
    <>
      {/* <!-- Footer section starts from here --> */}
      <footer>

        <h1>Threat and Intrusion Detection System</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil debitis eveniet magnam et itaque! Consequuntur pariatur in odit fuga placeat?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil debitis eveniet magnam et itaque! Consequuntur pariatur in odit fuga placeat?</p>

        {/* <!-- <div class="footer-col">
      <h3>Here on</h3>
      <li></li>
      <li>Power Tools</li>
      <li>Managed Website</li>
      <li>Kundli Service</li>
    </div> --> */}

        <div class="footer-col">
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Best Services</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>

        <div class="footer-col">
          <h3>Power Tools</h3>
          <li>Jobs</li>
          <li>Marketing Service</li>
          <li>Top Products</li>
          <li>Manage Reputation</li>
        </div>

        <div class="footer-col">
          <h3>Guides</h3>
          <li>Research</li>
          <li>Experts</li>
          <li>Term & Condition</li>
          <li>Privacy Policy</li>
          {/* <!-- <li></li> --> */}
        </div>

        <div class="copyright">
          <p>
            Copyright @ 2024 All rights reserved.
          </p>
          {/* <!-- <div class="pro-links">
        <i class="fab fa-whatsapp"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
      </div> --> */}
        </div>
      </footer>
      {/* <!-- Footer section ends from here --> */}
    </>
  )
}

export default Footer
