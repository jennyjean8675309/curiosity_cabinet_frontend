import React from 'react'

const Home = () =>
  <div className="main-image">
      <h1 className="home-header">Cabinets of Curiosity</h1>
      <img alt="" className="ui fluid image" src={require("../cabinet_doors.jpg")}></img>
      <h3 className="home-subheader">What will you collect?</h3>
  </div>

export default Home
