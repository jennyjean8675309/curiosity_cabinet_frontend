import React, {Component} from 'react'
import ItemCard from '../ItemCard'

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
          </div> :
          null }
      </div>
    )
  }
}

export default Cabinet
