import React, {Component} from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import ServiceCategories from './components/ServiceCategories'
import ServiceCategoryDetails from './components/ServiceCategoryDetails'
import users from './test/MockData/Users.mock'
import Provider from './components/Provider/Provider'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>No Idea Inc</h1>
                <Router>
                    <div>
                        <Link to="/admin">Admin</Link>
                        <Link to="/provider">Provider</Link>
                        <Route path="/provider" exact
                               render={() => <Provider provider={users[0]}/>}/>
                        <Route path="/admin" component={Admin}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
