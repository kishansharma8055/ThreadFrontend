import React from 'react'
import { Link } from "react-router-dom";
import htmlImage from '../../../../image/img5.jpg';
import './introduction.css';

const Introduction = () => {
  return (
    <>
      <img id='courseImg' src={htmlImage} alt="" />
      <section id="blog-container">
        <div className="heading_content">
          <div className="detail">
            <h3>CSS3 Course From The Beginning</h3><br />
            <p>If you aspire to be a web designer, gaining proficiency in CSS is important. It is the building blocks of web development along with HTML.</p>
            <p>Build modern responsive websites & UIs with CSS and CSS-3 </p>
            <span>Ratings 4.0</span>
            <p><sup>
              Created by kishan sharma
            </sup>
            </p>
            <p>Last updated 02/10/23</p>
            <p>Language- English</p>
          </div>
        </div>
      </section>

      <div className="line"></div>

      <section id="blog-container">
        <div className="blogsCardData">

          <div className="subscription">
            <h4>
              Subscription
            </h4>
          </div>

          <p>Get this course, plus Top Questions and projects</p>
          <p>Whole Course in Text Format</p>

          <div id='about_home'>
            <div className="detail">
              <h4>What you will learn</h4>
              <p>1. Introduction</p>
              <p>2. CSS Selectors(ID, Class, Tags, Attributes)</p>
              <p>3. Type of CSS</p>
              <p>4. Styling Background, Text, Fonts</p>
              <p>5. Styling Links, Lists Tables</p>
              <p>6. Dimension, Border, Margin, Padding</p>
              <p>7. Display, Positioning, Floating</p>
              <p>8. Navigation Bar</p>
              <p>9. Image Gallery, Opacity</p>
              <p>10. Transforms 2D, 3D</p>
              <p>11. Transitions</p>
              <h6>Conclusion</h6>
              <p>All web development is dependent</p>
              <p>on the powerful HTML and CSS.</p>
              {/* <p>13. Build Multiple High Quality Website & UI Projects.</p> */}
            </div>
          </div>

          <h3>₹19/-</h3>
          <div className="payment">
            <h4>
              <Link to='/payments' className='item'>Pay</Link>
            </h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Introduction
