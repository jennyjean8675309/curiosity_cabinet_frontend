import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CabinetCard extends Component{

  render(props){
    return (
      <Link to={"cabinets/" + this.props.cabinet.id}>
        <div>
          <img src={this.props.cabinet.image}/>
          <h3>"{this.props.cabinet.name}'s Cabinet"</h3>
        </div>
      </Link>
    )}
}

export default CabinetCard
