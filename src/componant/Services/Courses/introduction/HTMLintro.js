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
            <h3>Modern HTML5 Course From The Beginning</h3><br />
            <p>Build modern responsive websites & UIs with HTML5 </p>
            <span>Ratings 3.5</span>
            {/* <p><sup>
              Created by kishan sharma
            </sup>
            </p> */}
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
              <p>2. Settings and Live Server(VSCode Extension)</p>
              <p>3. Doctype & Basic Layout</p>
              <p>4. Create & Open HTML Pages</p>
              <p>5. Meta Tags & Search Engines</p>
              <p>6. Class & Id</p>
              <p>7. Links, Images & Atributes</p>
              <p>8. Lists & Tables</p>
              <p>9. Forms & Input</p>
              <p>10. Block & Inline Level Elements</p>
              <p>11. Divs & Spans</p>
              <p>12. HTML5 Semantic Tags</p>
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
