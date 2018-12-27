import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CabinetsContainer from './Containers/CabinetsContainer';
import Cabinet from './Containers/Cabinet'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import Item from './Item'
import Home from './Home'
import AccountButtons from './AccountButtons'
import NewAccountForm from './NewAccountForm'
import NewItemForm from './NewItemForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allCabinets: [],
      selectedCabinet: {},
      selectedItem: {},
      redirectToCabinet: false,
      newCabinetId: 0
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cabinets')
      .then(response => response.json())
      .then(cabinetData => this.setState({
        allCabinets: cabinetData
      }))
  }

  setSelectedCabinet = (cabinet) => {
    this.setState({
      selectedCabinet: cabinet
    })
  }

  setSelectedItem = (item) =>
  {
    this.setState({
      selectedItem: item
    })
  }

  createAccount = (e) => {
    let values = e.target.parentNode.firstElementChild.querySelectorAll('input')
    let data = {
      "name": values[5].value,
      "first_name": values[0].value,
      "last_name": values[1].value,
      "email": values[2].value,
      "username": values[3].value,
      "password": values[4].value,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Arolsen_Klebeband_09_231_1.jpg/405px-Arolsen_Klebeband_09_231_1.jpg",
      "items": []
    }
    console.log(data)
    fetch('http://localhost:3000/api/v1/cabinets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => this.setState({
        allCabinets: [...this.state.allCabinets, data],
        redirectToCabinet: true,
        newCabinetId: data.id
      }))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/cabinets/:id/:item_id" render={(props) => {
              return <Item item={this.state.selectedItem}/>
              }}
            />

          <Route path="/cabinets/:id" render={(props) => {
              let cabinetId = Number(props.match.params.id)
              return <Cabinet cabinet={this.state.allCabinets.find(c => c.id === cabinetId)}
              selectItem={this.setSelectedItem} />
            }}
            />

          <Route path="/new_item" render={() => <NewItemForm
              selectedCabinet={this.state.selectedCabinet}/>} />

          <Route path="/new_account" render={() => <NewAccountForm createAccount={this.createAccount}
          redirectToCabinet={this.state.redirectToCabinet}
          newCabinetId={this.state.newCabinetId}/>}/>

          <Route path="/my_cabinet" render={() => <AccountButtons createAccount={this.createAccount}/>}/>

          <Route path="/cabinets" render={() => <CabinetsContainer allCabinets={this.state.allCabinets}
          selectCabinet={this.setSelectedCabinet} /> }/>

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
