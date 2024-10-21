import React from 'react'
import { Link } from "react-router-dom";

const ManuCard = ({ manuData }) => {

    return (
        <>
        {/* <h3>hello this is blogscard data file</h3> */}
            <section className="main-card-container">
                {manuData.map((curElem) => {
                    const { id, image, category, headings, content1, links} = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <img src={image} alt="" className="card-media" />
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id} </span>
                                        {/* <span className="card-author subtle">{category} </span> */}
                                        <h4 className="card-title">{headings}</h4>
                                        <div className="card-read">{content1}</div>
                                        <Link to={links} className='item'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default ManuCard
