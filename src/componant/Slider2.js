import React from 'react';
import './SliderStyle2.css';

const Slider2 = (props) => {
    return (
        <>
            {/* <!-- Hero section starts from here --> */}
            <section id="home2" className='Hero'>
                <h1> {props.title} </h1>
            </section>
            {/* <!-- Hero section ends from here --> */}
        </>
    )
}

export default Slider2;

Slider2.defaultProps = {
    title: "set title",
    name: "set name"
}