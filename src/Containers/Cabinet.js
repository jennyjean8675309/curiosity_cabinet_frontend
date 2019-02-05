import React, {Component} from 'react'
import ItemCard from '../Components/ItemCard'
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
                      selectItem={this.props.selectItem}
                      match={this.props.match} />
            })}</div>
            <div>
              <br></br>
              <br></br>
              <br></br>{this.props.currentUser && this.props.cabinet.id === this.props.currentUser.id ? <Link to="/new_item"><button onClick={() => this.props.addOrEditItem('add')}>Collect an Item</button></Link> : null}
            </div>
          </div>
           : null }
      </div>
    )
  }
}

export default Cabinet
