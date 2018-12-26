import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CabinetCard extends Component{
  render(){
    return (
      <div className="card">
        <div className="content">
          <div className="header">{this.props.cabinet.name}</div>

          <div className="ui small images">
            <img alt={this.props.cabinet.name} src={this.props.cabinet.image}/>
          </div>

          <div className="extra content">
            <Link to={"cabinets/" + this.props.cabinet.id}><div className="ui bottom attached button" onClick={() => this.props.handleOnClick(this.props.cabinet)}>
              <i className="add icon"></i>
                See Inside
            </div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CabinetCard
