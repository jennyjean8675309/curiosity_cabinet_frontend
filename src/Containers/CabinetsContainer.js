import React, { Component } from 'react'
import { connect } from 'react-redux'
import CabinetCard from './CabinetCard'

class CabinetsContainer extends Component{
  render(){
    return (
      <div className="ui five cards">
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

const mapStateToProps = (state) =>{
  return { allCabinets: state.users }
}

export default connect(mapStateToProps)(CabinetsContainer);

// handleOnClick={this.props.selectCabinet}
// match={this.props.match}
