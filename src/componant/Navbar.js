import React, { useState } from 'react'
import logo from '../image/logo.png';
import profile from '../image/profile.png';
import './NavbarStyle.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const menuBtn = event => {
        setIsActive(current => !current);
    };

    const menuClose = event => {
        setIsActive(current => !current);
    };

    return (
        <>
            <header>
                <div>
                    <Link to="/PanchangData" className='item'><img src={logo} alt="logo_image" /></Link>
                </div>
                <div>
                    <p id='om'></p>
                </div>
                <nav>
                    <div id="contents" className={`content ${isActive ? 'active' : ''}`}>
                        <ul>
                            <i onClick={menuClose} id="menu-close" className="fas fa-times">X</i>
                            <Link to="/" className='item'>Home</Link>
                            <Link to="/about" className='item'>About</Link>
                            <Link to="/services" className='item'>Services</Link>
                            <Link to="/contact" className='item'>Contact </Link>
                            {/* <Link to="/Blogs" className='item'>Blogs</Link> */}
                            {/* <Link to="/Login" className='item'>Login</Link> */}
                        </ul>
                        {/* <div id="profile">
                            <Link to="/profile" className='item'>
                                <img src={profile} alt="profile image" /></Link>
                        </div> */}
                    </div>
                    <button id="menu-btn" onClick={menuBtn}>
                        <div className="container">
                            <div className="box"></div>
                            <div className="box" id="box2"></div>
                            <div className="box" id="box3"></div>
                        </div>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Navbar




// function Video({ video }) {
//     return (
//       <div>
//         <Thumbnail video={video} />
//         <a href={video.url}>
//           <h3>{video.title}</h3>
//           <p>{video.description}</p>
//         </a>
//         <LikeButton video={video} />
//       </div>
//     );
//   }