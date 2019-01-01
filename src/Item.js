import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component{
  render(){
    return (
      <div>
        { this.props.item ?
          <div>
            <img alt={this.props.item.name} src={this.props.item.image_url} />
            <br></br>
            <h1>{this.props.item.name}</h1>
            <h5>Where this item is located: {this.props.item.location}</h5>
            <br></br>
            <h3>{this.props.item.description}</h3>
            <h3>{this.props.item.interpretation}</h3>
            <br></br>
            {this.props.currentUser && this.props.selectedCabinet.id === this.props.currentUser.id ? <div><Link to="/new_item"><button onClick={() => this.props.addOrEditItem('edit')}>Edit This Item</button></Link>
            <br></br>
            <br></br>
            <Link to={`/cabinets/${this.props.selectedCabinet.id}`}><button onClick={() => this.props.deleteItem(this.props.item)}>Delete This Item</button></Link></div> : null}          
          </div> :
          null }
      </div>
    )
  }
}

export default Item
