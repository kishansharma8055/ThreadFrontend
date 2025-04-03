import React from 'react'

function Navbar({ filterItem, manuList }) {
  return (
    <>
      <nav className='navbar'>
        <h3>Our Services</h3>
        <div className="btn-group">
          {manuList.map((curElem) => {
              return (
                <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
              )
          })}

        </div>
      </nav>
    </>
  )
}

export default Navbar
