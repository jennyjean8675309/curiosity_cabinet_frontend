import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () =>
  <div className="ui menu">
    <a className="item"><i className="binoculars icon"></i></a>
    <div className="right menu">
      <a className="item">About</a>
      <a className="item">My Cabinet</a>
      <Link to="cabinets" className="item">Explore</Link>
    </div>
  </div>

export default NavBar
