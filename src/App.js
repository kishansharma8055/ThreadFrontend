// import React from "react";
import {Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

import Navbar from "./componant/Navbar";
import Home from "./componant/Home";
import About from "./componant/About";
import Services from "./componant/Services/Services";
import Contact from "./componant/Contact";
import Blogs from "./componant/Blogs/Blogs";
import Error from "./componant/Error";
import Footer from "./componant/Footer";
// import Chat from "./componant/myChat/Chatbot";
import Chat from "./componant/myChat/chat";
import Payments from "./componant/Services/Courses/payment/Payments";
import HTMLIntro from "./componant/Services/Courses/introduction/HTMLintro";
import CSSIntro from "./componant/Services/Courses/introduction/CSSintro";
import Profile from "./componant/UserProfile/Profile";

// backend start
import main from "./componant/Services/backend/main";
// backend end


function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    axios.get('https://ThreadBackend.onrender.com/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/payments" Component={Payments} />
        <Route path="/htmlIntro" Component={HTMLIntro} />
        <Route path="/cssIntro" Component={CSSIntro} />
        <Route path="/profile" Component={Profile} />
        {/* <Route path="/chatbot" Component={Chatbot} /> */}
        <Route path="/chat" Component={Chat} />
        <Route Component={Error} />

        {/* backend start */}
        <Route path="/main" Component={main} />
        {/* backend end */}

      </Routes>
     
      <Footer /> 
      {/* <h1>Thread Detection Website</h1>
      <p>{data ? data.message : 'Loading...'}</p> */}
    </>
  );
}

export default App;
