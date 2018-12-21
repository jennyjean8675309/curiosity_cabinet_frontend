import React, {Component} from 'react'
import Item from '../Item'

class Cabinet extends Component{
  render(){
    console.log(this.props.cabinet)
    return (
      <div>
        {this.props.cabinet ?
          <div>
            <div>{this.props.cabinet.name}</div>
            <div>{this.props.cabinet.items.map(i => {
                return <Item
                        key={i.item_id}
                        item={i} />
              })}</div>
          </div> :
          null}
      </div>
    )
  }
}

export default Cabinet
