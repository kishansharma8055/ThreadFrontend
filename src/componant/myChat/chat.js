import React from 'react'
import img from '../../image/chatbot1.png'
import './Chatbot.css';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            {/* <div>
                <h3>this is error page</h3>
            </div> */}
            <Link to="https://chattingapp-v85s.onrender.com/" className='item'>
                <div className='chatbot_container'>
                    <img id='chatbot' src={img} alt="Chat" />
                    {/* <p>Live Chat</p> */}
                </div>
            </Link>
        </>
    )
}

export default Error
