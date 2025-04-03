import React, { useState } from 'react';
// import './Services.css';
// services file take a css file from BlogsStyle.css
import Manu from './CourseApi';
import ManuCard from './CourseCard';
import Filter from './Filter';
// backend code start

// backend code end


const uniqueList = [
    // ... this is a spread operator
    ... new Set(
      Manu.map((curElem) => {
        return curElem.category
      })
    ),
    "All",
  ]
  // console.log(uniqueList);


const Blogs = () => {

    const [manuData, setManuData] = useState(Manu);
    const [manuList, setManuList] = useState(uniqueList);
    // backend code start

    // backend code end
  
    const filterItem = (category) => {
  
      if(category === "All"){
        setManuData(Manu);
        return ;
      }
  
      const updateList = Manu.filter((curElem) => {
        return curElem.category === category;
      });
      setManuData(updateList);
    };

  return (
    <>
      {/* <!-- Hero section starts from here --> */}
	<div id="about-home">
		<p className='headings'>
			{/* <strong>Services</strong> */}
		</p>
	</div>
	{/* <!-- Hero section ends from here --> */}


	{/* <!-- Blog container starts from here --> */}
	<section id="blog-container">
        <div className="blogsCardData">
            <Filter filterItem = {filterItem} manuList = {manuList} />
            <ManuCard manuData = {manuData} />
        </div>
	</section>
	{/* <!-- Blog container ends from here --></hr> */}
    </>
  )
}

export default Blogs
