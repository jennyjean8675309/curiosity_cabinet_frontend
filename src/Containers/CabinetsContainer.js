import React, { Component } from 'react'
import CabinetCard from './CabinetCard'

class CabinetsContainer extends Component{
  render(){
    return (
      <div>
        {this.props.allCabinets.map(cabinet =>
          <CabinetCard
            key={cabinet.id}
            cabinet={cabinet}
            handleOnClick={this.props.select}
          />
        )}
      </div>
    )
  }
}

export default CabinetsContainer
