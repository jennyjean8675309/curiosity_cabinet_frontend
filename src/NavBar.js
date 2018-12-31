import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>
  <div className="ui menu">
    <Link to={`${props.match.params.url}`} className="item"><i className="binoculars icon"></i></Link>
    <div className="right menu">

      <Link to={`${props.match.params.url}/about`} className="item">About</Link>

      <Link className="item" to={props.currentUser ? `${props.match.params.url}/cabinets/${props.currentUser.id}` :
      "/my_cabinet"}>My Cabinet</Link>

      <Link to={`${props.match.params.url}/cabinets`} className="item">Explore</Link>

      {localStorage.getItem('token') ?
        <Link onClick={props.logOut} to={`${props.match.params.url}`} className="item">Log Out</Link>
      : null
      }
    </div>
  </div>

export default NavBar
