import React, { Component } from 'react'

class Item extends Component{
  render(){
    return (
      <div>
        { this.props.item ?
          <div>
            <img alt={this.props.item.name} src={this.props.item.image_url} />
            <br></br>
            <h1>{this.props.item.name}</h1>
            <h5>Location: {this.props.item.location}</h5>
            <br></br>
            <h3>{this.props.item.description}</h3>
            <h3>{this.props.item.interpretation}</h3>
          </div> :
          null }
      </div>
    )
  }
}

export default Item
