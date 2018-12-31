import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import CabinetsContainer from './Containers/CabinetsContainer';
import Cabinet from './Containers/Cabinet'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import Item from './Item'
import Home from './Home'
import AccountButtons from './AccountButtons'
import NewAccountForm from './NewAccountForm'
import NewItemForm from './NewItemForm'
import About from './About'
import Login from './Login'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      allCabinets: [],
      selectedCabinet: {},
      selectedItem: {},
      redirectToCabinet: false,
      newCabinetId: 0,
      redirectToItem: false,
      newItemId: 0,
      addOrEditItem: '',
      loading: true
    }
  }

  componentDidMount(){
    this.fetchCabinets()
    this.fetchToken()

  }

  fetchCabinets = () =>{
    fetch('http://localhost:3000/api/v1/cabinets')
      .then(response => response.json())
      .then(cabinetData => this.setState({
        allCabinets: cabinetData
      }))
  }

  fetchToken = () =>{
    let token = localStorage.getItem('token')
    if (token){
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      }).then(response => response.json())
      .then(data =>{
        console.log(data)
        this.setState({
        currentUser: data.user,
        loading: false
      })})
    } else {
      this.setState({
        loading: false
      })
    }
  }

  setCurrentUser = (userObj) =>{
    this.setState({
      currentUser: userObj
    })
  }

  logOut = () =>{
    console.log('logging out...')
    this.setState({
      currentUser: null
    })
    localStorage.clear()
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
      cabinet: {
        "name": values[5].value,
        "first_name": values[0].value,
        "last_name": values[1].value,
        "email": values[2].value,
        "username": values[3].value,
        "password": values[4].value,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Arolsen_Klebeband_09_231_1.jpg/405px-Arolsen_Klebeband_09_231_1.jpg",
        "items": []
      }
    }
    console.log(data)
    fetch('http://localhost:3000/api/v1/cabinets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
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

  addOrEditItem = (command) => {
    if (command === 'add'){
    this.setState({
      addOrEditItem: 'add'
    })} else if (command === 'edit'){
    this.setState({
      addOrEditItem: 'edit'
    })
    }
  }

  addItem = (e, cabinet) => {
    let inputs = e.target.parentNode.firstElementChild.querySelectorAll('.input-field')
    let data = {
      "cabinet_id": this.state.selectedCabinet.id,
      "item_type_id": inputs[5].value,
      "name": inputs[0].value,
      "description": inputs[3].value,
      "interpretation": inputs[4].value,
      "location": inputs[1].value,
      "image_url": inputs[2].value
    }
    fetch('http://localhost:3000/api/v1/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({
      redirectToItem: true,
      newItemId: data.id
    }))
  }

  editItem = (e, item) => {
    let inputs = e.target.parentNode.firstElementChild.querySelectorAll('.input-field')
    let data = {
      "cabinet_id": this.state.selectedCabinet.id,
      "item_type_id": inputs[5].value,
      "name": inputs[0].value,
      "description": inputs[3].value,
      "interpretation": inputs[4].value,
      "location": inputs[1].value,
      "image_url": inputs[2].value
    }
    fetch(`http://localhost:3000/api/v1/items/${item.item_id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => this.setState({
      selectedItem: data,
      redirectToItem: true
    }))
  }

  deleteItem = (item) => {
    fetch(`http://localhost:3000/api/v1/items/${item.item_id}`, {
      method: "DELETE"
    }).then(response => response.json())
    .then(data => this.deleteItemFromDOM(data))
  }

  deleteItemFromDOM = (data) => {
    let item = this.state.selectedCabinet.items.find(i => i.item_id === data.id)
    let clonedCabinet = Object.assign({},   this.state.selectedCabinet)
    let itemIndex = clonedCabinet.items.indexOf(item)
    let updatedCabinet = clonedCabinet.items.splice(itemIndex, 1)
    this.setState({
      selectedCabinet: clonedCabinet
    })
  }



  render() {
    return (
      <div className="App">
        <NavBar
          match={{params: {url:""}}}
          currentUser={this.state.currentUser}
          logOut={this.logOut} />
        <Switch>
          <Route path="/cabinets/:id/:item_id" render={(props) => {
              return <Item item={this.state.selectedItem}
              deleteItem={this.deleteItem}
              selectedCabinet={this.state.selectedCabinet}
              addOrEditItem={this.addOrEditItem}/>
              }}
            />

          <Route path="/cabinets/:id" render={(props) => {
              let cabinetId = Number(props.match.params.id)
              return <Cabinet cabinet={this.state.allCabinets.find(c => c.id === cabinetId)}
              selectItem={this.setSelectedItem}
              addOrEditItem={this.addOrEditItem}
              match={{params: {id:cabinetId, url:cabinetId}}}
              currentUser={this.state.currentUser}
              />
            }}
            />

          <Route path="/new_item" render={() => <NewItemForm
              selectedCabinet={this.state.selectedCabinet}
              addItem={this.addItem}
              redirectToItem={this.state.redirectToItem}
              newItemId={this.state.newItemId}
              selectedItem={this.state.selectedItem}
              editItem={this.editItem}
              addOrEditItem={this.state.addOrEditItem} />} />

          <Route path="/new_account" render={() => <NewAccountForm createAccount={this.createAccount}
          redirectToCabinet={this.state.redirectToCabinet}
          newCabinetId={this.state.newCabinetId}/>}/>

          <Route path="/my_cabinet" render={() => <AccountButtons createAccount={this.createAccount}/>} />

          <Route path="/login" render={() => this.state.currentUser === null ? <Login
            setCurrentUser={this.setCurrentUser}/> :
            <Redirect to={`/cabinets/${this.state.currentUser.id}`} />} />

          <Route path="/cabinets" render={() => <CabinetsContainer allCabinets={this.state.allCabinets}
          selectCabinet={this.setSelectedCabinet}
          match={{params: {url:"/cabinets"}}}
          /> }/>

          <Route path="/about" component={About}/>

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
