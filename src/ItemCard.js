import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ItemCard extends Component{
  render(){
    return (
      <div className="ui card">
        <div className="image">
          <img alt={this.props.item.name} src={this.props.item.image_url}/>
        </div>
        <div className="content">
          <p className="header">{this.props.item.name}</p>
          <div className="meta">
            <span className="type">{this.props.item.item_type.name}</span>
          </div>
          <div className="description">{this.props.item.description}
          </div>
          <Link to={"cabinets/" + this.props.cabinet.id + this.props.item.item_id}><div className="ui bottom attached button" onClick={() => this.props.selectItem(this.props.item)}>
            <i className="add icon"></i>
              See More
          </div></Link>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            10 Comments
          </a>
        </div>
      </div>
    )
  }
}

export default ItemCard
