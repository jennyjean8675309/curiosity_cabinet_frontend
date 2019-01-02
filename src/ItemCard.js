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
            <span className="type">{this.props.item.item_type.name ? this.props.item.item_type.name : null}</span>
          </div>
          <div className="description">{this.props.item.description}
          </div>
          <Link to={`${this.props.match.params.url}/${this.props.item.item_id}`}><div className="ui bottom attached button" onClick={() => this.props.selectItem(this.props.item, this.props.cabinet)}>
            <i className="add icon"></i>
              See More
          </div></Link>
        </div>
        <div className="extra content">
          <a>
            <i className="lock open icon"></i>
            This item is unlocked
          </a>
        </div>
      </div>
    )
  }
}

export default ItemCard
