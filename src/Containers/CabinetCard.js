import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CabinetCard extends Component{
  render(){
    return (
      <Link to={"cabinets/" + this.props.cabinet.id}>
        <div onClick={() => this.props.handleOnClick(this.props.cabinet)}>
          <img alt={this.props.cabinet.name} src={this.props.cabinet.image}/>
          <h3>"{this.props.cabinet.name}'s Cabinet"</h3>
        </div>
      </Link>
    )}
}

export default CabinetCard
