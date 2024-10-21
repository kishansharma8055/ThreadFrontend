import React from 'react'
// import img1 from '../../image/img1.jpeg';

const PrivacyComponant = ({pdata}) => {
    return (
        <>
            <div className="fea-base">
                {pdata.map((curElem) => {
                    const { id, image, name, discription } = curElem;
                    return (
                        <>
                            <div className="fea-box">
                                {/* <span>{id}</span> */}
                                <img src={image} alt="image not found" className="featureImage"/>
                                <div className="fretureData">
                                    {/* <h3> {name} </h3> */}
                                    <p>{discription}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
    
        </>
    )
}

export default PrivacyComponant;
