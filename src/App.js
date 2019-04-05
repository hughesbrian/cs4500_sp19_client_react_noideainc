import React, {Component} from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import ServiceCategories from './components/ServiceCategories'
import ServiceCategoryDetails from './components/ServiceCategoryDetails'
import users from './test/MockData/Users.mock'
import Provider from './components/Provider/Provider'
import Home from './components/Home'
import ServiceNavigatorContainer from './components/ServiceNavigator/ServiceNavigatorContainer'
import ServiceProviderNavigatorContainer from './components/SearchProviders/ServiceProviderNavigatorContainer'


class App extends Component {
  render() {
    return (
      <div className="container-fluid home">
        <h1>No Idea Inc</h1>
        <Router>
          <div className="sum-nar-bar">
            <Link to="/home">Home</Link> |
            <Link to="/services"> Services</Link> |
            <Link to="/providers"> Providers</Link> |
            <Link to="/admin">Admin</Link> |
            <Link to="/provider"> Provider</Link>
            <br/>
            <Route path="/admin" component={Admin}/>
            <Route path="/services" exact component={ServiceNavigatorContainer}/>
            <Route path="/provider" exact render={() => <Provider provider={users[0]}/>}/>
            {/* <Route
                path="/provider"
                exact
                render={() => <Provider provider={serviceCategories[0].serviceProviders[0]}/>}/> */}
            <Route
                path="/home"
                exact
                component={Home}/>
            {/* <Route
                path="/admin"
                exact
                component={Admin}/>
                */}
            <Route
                path="/providers"
                exact
                component={ServiceProviderNavigatorContainer}/>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
