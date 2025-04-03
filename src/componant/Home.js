import React from 'react'
// import Slider from "./Slider";
import Slider2 from "./Slider2";
import Feature from "./Feature/Feature";
import Chat from "./myChat/chat";
// import Footer from "./Footer";

const Home = () => {
    return (
        <>
            {/* <Slider /> */}
            <Slider2 title="Welcome to Threat Detection System" />
            <Feature />
            <Chat />
            {/* <Footer /> */}
        </>
    )
}

export default Home
