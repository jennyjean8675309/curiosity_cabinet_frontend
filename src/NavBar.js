import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>
  <div className="ui menu">
    <Link to={`${props.match.params.url}`} className="item"><i className="binoculars icon"></i></Link>
    <div className="right menu">
      <Link to={`${props.match.params.url}/about`} className="item">About</Link>
      <Link to="/my_cabinet" className="item">My Cabinet</Link>
      <Link to={`${props.match.params.url}/cabinets`} className="item">Explore</Link>
    </div>
  </div>

export default NavBar
