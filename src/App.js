import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CabinetsContainer from './Containers/CabinetsContainer';
import Cabinet from './Containers/Cabinet'
import NavBar from './NavBar'
import Item from './Item'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allCabinets: [],
      selectedCabinet: {}
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

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/cabinets/:id/:item_id" render={() => <Item />} />

          <Route path="/cabinets/:id" render={(props) => {
              let cabinetId = Number(props.match.params.id)
              return <Cabinet cabinet={this.state.allCabinets.find(c => c.id === cabinetId)}/>
            }}

            />

          <Route path="/cabinets" render={() => <CabinetsContainer allCabinets={this.state.allCabinets}
          select={this.setSelectedCabinet} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
