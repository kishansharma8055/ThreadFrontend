import React from 'react';
import './SliderStyle.css';
// import kishan from 'kishan.html';
import { Link } from "react-router-dom";


const Slider = () => {
    return (
        <>
            {/* <!-- Hero section starts from here --> */}
            <section id="home" className='Hero'>
                <h2>Welcome to Threat</h2>
                <h2>Detection System</h2>
                {/* <!-- <div><span>Time : </span><span id="time"></span> <br> <span>Date : </span><span id="date"></span></div> --> */}
                <h2>
                    {/* <!-- Pandit Onprakash Sharam --> */}
                </h2>
                <p>
                    {/* <!-- This website is made by kishan Sharma. For Education --> */}
                </p>
                <div className="btn">
                    {/* <a href="kishan.html" className="blue">Today Panchang</a> */}

                    {/* <iframe src="kishan.html" frameborder="0"></iframe> */}

                    <Link to="/Services" className='blue'>Services</Link>
                    <Link to="/Contact" className='yellow'>Contact</Link>
                </div>
            </section>
            {/* <!-- Hero section ends from here --> */}
        </>
    )
}

export default Slider;
