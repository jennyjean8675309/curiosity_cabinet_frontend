import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      "itemName": this.props.selectedItem.name || '',
      "location": this.props.selectedItem.location || '',
      "imageUrl": this.props.selectedItem.image_url || '',
      "description": this.props.selectedItem.description || '',
      "interpretation": this.props.selectedItem.interpretation || '',
      "item_type_id": this.props.selectedItem.item_type_id || ''
    }
  }
  render(){
    if (this.props.redirectToItem) {
      return <Redirect to={`/cabinets/${this.props.selectedCabinet.id}/${this.props.newItemId}`} />
    }

    return (
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="fields">
            <div className="four wide field">
              <label>Item Name</label>
              <input placeholder="Item Name" type="text" className="input-field" defaultValue={this.state.itemName}></input>
            </div>

            <div className="four wide field">
              <label>Location</label>
              <input placeholder="Location" type="text" className="input-field" defaultValue={this.state.location}></input>
            </div>

            <div className="four wide field">
              <label>Image Url</label>
              <input placeholder="Image Url" type="text" className="input-field" defaultValue={this.state.imageUrl}></input>
            </div>

          </div>
            <div className="field">
              <label>Description</label>
              <input placeholder="Description" type="text" className="input-field" defaultValue={this.state.description}></input>
            </div>

            <div className="field">
              <label>Interpretation</label>
              <textarea placeholder="Interpretation" className="input-field" defaultValue={this.state.interpretation}></textarea>
            </div>

            <div className="field">
                <select className="input-field">
                    <option className="item" value="">Item Type</option>
                    <option className="item" value="1">Artificialia</option>
                    <option className="item" value="2">Naturalia</option>
                    <option className="item" value="3">Exotica</option>
                    <option className="item" value="4">Scientifica</option>
                </select>
            </div>
          </div>
          <br></br>
          <div className="ui submit button" onClick={(e) => {
            if (this.props.addOrEditItem === 'edit') {
              this.props.editItem(e, this.props.selectedItem)
            } else if (this.props.addOrEditItem === 'add') {
              this.props.addItem(e, this.props.selectedCabinet)
            }
          }}>Submit</div>
      </div>
  )
  }
}

export default NewItemForm
