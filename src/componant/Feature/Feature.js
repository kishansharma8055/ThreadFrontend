import React, { useState } from 'react';
import './Features.css';
import FeatureComponant from './FeatureComponant';
import PrivacyComponant from './PrivacyComponant';
import ExpertComponant from './ExpertComponant';
import FeatureData from './FeatureApi';
import PrivacyData from './PrivacyApi';
import ExpertData from './ExpertApi';
import Ram from './Ram';
// import logo from '../image/logo.png';
import imageUrl from "../../image/profile.png";
// import imageUr2 from "../../image/kishan.jpg";

const Feature = () => {

    const [fdata, setFdata] = useState(FeatureData);
    const [pdata, setPdata] = useState(PrivacyData);
    const [edata, setEdata] = useState(ExpertData);


    return (
        <>
            <section id="features">
                <h1>Awesome Features</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid?</p>
                <p>Lorem ipsum dolor sit.</p> */}

                <div class="fea-base">
                    <FeatureComponant fdata={fdata} />
                </div>
            </section>

            <section id="features">
                <h1>Privacy Services</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid?</p>
                <p>Lorem ipsum dolor sit.</p> */}

                <div class="fea-base">
                    <PrivacyComponant pdata={pdata} />
                </div>
            </section>

            <section id="features">
                <h1>Our Experts</h1>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid?</p>
                <p>Lorem ipsum dolor sit.</p> */}

                <div class="fea-base">
                    <Ram image={imageUrl} name="Kishan Sharma" position="(Web Developer)" />
                    <Ram image={imageUrl} name="Yasharth Pawar" position="" />
                    <Ram image={imageUrl} name="Dikshant Ubana" position="" />
                    <Ram image={imageUrl} name="Shivam Mantri" position="" />
                </div> 
            </section>

            <section id="features">
                <div class="fea-base">
                    <h1> Everyone can use this website for threat detection in your system.</h1>
                </div>
            </section>

        </>
    )
}

export default Feature
