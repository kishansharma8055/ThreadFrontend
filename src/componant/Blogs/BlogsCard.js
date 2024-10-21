import React from 'react'

const ManuCard = ({ manuData }) => {
    return (
        <>
        {/* <h3>hello this is blogscard data file</h3> */}
            <section className="main-card-container">
                {manuData.map((curElem) => {
                    const { id, image, category, headings, content1 } = curElem;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <img src={image} alt="" className="card-media" />
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id} </span>
                                        <span className="card-author subtle">{category} </span>
                                        <h2 className="card-title">{headings}</h2>
                                        <div className="card-read">{content1}</div>
                                        <span className="card-tag subtle">Read More</span>
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
