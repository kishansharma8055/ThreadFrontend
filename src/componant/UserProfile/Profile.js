import React from 'react'
import './profile.css';

const Profile = () => {
    return (
        <>
            <section id='first'>
                <div className="container2">
                    <form action="post">
                    <h3>Webcome Kishan Sharma</h3>
                    <p>Name : kishan</p>
                    <p>age : 20</p>
                    <p>Mobile No. : 123654789</p>
                    <p>Email Id : kishan@gmail.com</p>
                    <p>Password : 123456</p>
                    </form>
                </div>
            </section>

            <div className='line'></div>

            <section id="second">
            <div className="container2">
                    <h3>You Courses</h3>
                    <div></div>
                </div>
            </section>

        </>
    )
}

export default Profile
