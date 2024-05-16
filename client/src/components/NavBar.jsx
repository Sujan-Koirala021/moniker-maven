

import React from 'react'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container">
        {/* <img src={Logo} alt="" className="logo" /> */}
        <div className="categories">
          <ul>
            <li>Culture</li>
            <li>Science</li>
            <li>Sports</li>

          </ul>


        </div>
        <span>User1</span>
          <span>Logout</span>
          <span >Create</span>
      </div>
    </div>
  )
}
