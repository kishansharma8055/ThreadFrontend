import React from 'react'
import img from '../../image/chatbot1.png';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <>
    <div className='chatbot_container'>
      <img id='chatbot' src= {img} alt="" />
      {/* <p>Live Chat</p> */}
    </div>
    {/* <div className='chatbot_container2'>
      <img id='chatbot2' src= {img2} alt="" />
    </div> */}
    </>
  )
}

export default Chatbot
