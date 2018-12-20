import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      currentCabinet: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cabinets')
      .then(response => response.json())
      .then(cabinetData => this.setState({
        allCabinets: cabinetData
      }))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" render={() => <NavBar />} />
          <Route exact path="/cabinets" render={() => <CabinetsContainer allCabinets={this.state.allCabinets}/>} />
          <Route exact path="/cabinets/:id" render={() => <Cabinet />} />
          <Route exact path="/cabinets/:id/:item_id" render={() => <Item />} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
