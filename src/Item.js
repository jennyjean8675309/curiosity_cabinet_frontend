import React, { Component } from 'react'

class Item extends Component{
  render(){
    return (
      <div>
        <div>{this.props.item.name}</div>
        <img alt={this.props.item.name} src={this.props.item.image_url}/>
      </div>
    )
  }
}

export default Item
