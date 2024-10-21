// import PropTypes from 'prop-types';

// export default function MidBody(props){
//     return (
//         <>
//             <h2> {props.title} </h2>
//             <h3> {props.name} </h3>
//         </>
//     );
// };

// MidBody.defaultProps = {
//     title: "set title",
//     name: "set name"
// }


import React from 'react'


export default function ExpertComponant(props) {
    return (
        <>
            <div className="fea-base">
                <>
                    <div className="fea-box">
                        {/* <span>{props.id}</span> */}
                        <img src={props.image} alt="image not found" className="featureImage"/>
                        <div className="fretureData">
                            <h3> {props.name} </h3>
                            <p>{props.position}</p>
                        </div>
                    </div>
                </>
            </div>

        </>
    )
}

ExpertComponant.defaultProps = {
    image: "set image",
    name: "set name",
    position: "set title"
}