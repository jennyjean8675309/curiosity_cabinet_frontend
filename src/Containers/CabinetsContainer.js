import React, { Component } from 'react'
import CabinetCard from './CabinetCard'

class CabinetsContainer extends Component{
  render(){
    return (
      <div className="ui five cards">
        {this.props.allCabinets.map(cabinet =>
          <CabinetCard
            key={cabinet.id}
            cabinet={cabinet}
            handleOnClick={this.props.selectCabinet}
            match={this.props.match}
          />
        )}
      </div>
    )
  }
}

export default CabinetsContainer
