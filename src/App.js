import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CabinetsContainer from './Containers/CabinetsContainer';
import Cabinet from './Containers/Cabinet'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import Item from './Item'
import Home from './Home'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allCabinets: [],
      selectedCabinet: {},
      selectedItem: {}
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

// <Item item={this.state.selectedCabinet.items.find((i) => i.item_id === Number(props.match.params.item_id))} />

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

          <Route path="/cabinets" render={() => <CabinetsContainer allCabinets={this.state.allCabinets}
          selectCabinet={this.setSelectedCabinet} /> }/>

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
