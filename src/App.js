import React, { Component } from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import ServiceNavigatorContainer from './components/ServiceNavigator/ServiceNavigatorContainer'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>No Idea Inc</h1>
        <Router>
          <div>
            <Link to="/home">Home</Link> |
            <Link to="/services"> Services</Link> |
            <Link to="/providers"> Providers</Link> |
            <Link to="/admin">Admin</Link> |
            <Link to="/provider"> Provider</Link>
            <br/>
            <Route path="/admin" component={Admin}/>
            <Route path="/services" exact component={ServiceNavigatorContainer}/>
            {/*
            <Route
                path="/provider"
                exact
                render={() => <Provider provider={serviceCategories[0].serviceProviders[0]}/>}/>
            <Route
                path="/home"
                exact
                component={Home}/>

            <Route
                path="/admin"
                exact
                component={Admin}/>
            <Route
                path="/providers"
                exact
                component={ServiceProviderNavigator}/>
            */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
