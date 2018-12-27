import React, {Component} from 'react'
import ItemCard from '../ItemCard'
import { Link } from 'react-router-dom'

class Cabinet extends Component{
  render(){
    return (
      <div>
        { this.props.cabinet ?
          <div>
            <div><h1>{this.props.cabinet.name}</h1></div>
            <br></br>
            <div className="ui four cards">{this.props.cabinet.items.map(i => {
              return <ItemCard
                      key={i.item_id}
                      item={i}
                      cabinet={this.props.cabinet}
                      selectItem={this.props.selectItem}/>
            })}</div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/new_item"><button>Collect an Item</button></Link>
            </div>
          </div>
           : null }
      </div>
    )
  }
}

export default Cabinet
