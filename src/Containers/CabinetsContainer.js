import React, { Component } from 'react'
import CabinetCard from './CabinetCard'

class CabinetsContainer extends Component{
  render(props){
    return (
      <div>
        {this.props.allCabinets.map(cabinet =>
          <CabinetCard
            key={cabinet.id}
            cabinet={cabinet}
          />
        )}
      </div>
    )
  }
}

export default CabinetsContainer
