import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CabinetCard extends Component{
  render(){
    return (
      <div className="card">
        <div className="content">
          <div className="header">{this.props.cabinet.cabinet_name}</div>

          <div className="ui small images">
            <img alt={this.props.cabinet.cabinet_name} src={this.props.cabinet.image}/>
          </div>
        </div>
        <div className="extra content">
          <Link to={`cabinets/${this.props.cabinet.id}`}><div className="ui bottom attached button" onClick={() =>
          this.handleOnClick(this.props.cabinet)}>
            <i className="add icon"></i>
              See Inside
          </div></Link>
        </div>
      </div>
    )
  }

  handleOnClick = (cabinet) =>{
    console.log(cabinet)
  }
}

export default CabinetCard
