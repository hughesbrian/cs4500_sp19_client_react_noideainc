import React, {Component} from 'react';
//import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import users from './test/MockData/Users.mock'
import Provider from './components/Provider/Provider'
import Home from './components/Home'
import RegisterContainer from './components/Signup/RegisterContainer'
import ServiceNavigatorContainer from './components/ServiceNavigator/ServiceNavigatorContainer'
import ServiceProviderNavigatorContainer from './components/SearchProviders/ServiceProviderNavigatorContainer'
import LoginContainer from './components/Login/LoginContainer'
import usereAnthentication from './services/UserAuthenticationService'
import userService from './services/UserService'
import ProfileContainer from './components/Profile/ProfileContainer'

class App extends Component {

  constructor(props) {
    super(props);
    this.usereAnthentication = usereAnthentication.getInstance();
    this.state = {
      checkLog: false,
      userId: null,
      user: null
    }
  }

  componentDidMount() {
    this.checklog()
  }

  logout = () => {
    alert("logout successfully")
    this.usereAnthentication.logout()
    .then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    });
    window.location.reload()
  }

  checklog = async () => {
    try {
      let res = await this.usereAnthentication.checkLogin();
      if (res.email != null && res.password != null) {
        this.setState({
          checkLog: true,
          userId: res.id,
          user: res
        })
      }       
    } catch (error) {
        console.log(error)
    }
  }

  LogComponent = () => {
    if (this.state.checkLog) {
      return <Link onClick={this.logout} to="/home"> Logout</Link>;
    } else {
      return <Link to="/login"> Login</Link>;
    }
  }

  renderProfileLink = () => {
    if (this.state.checkLog) {
      return <span><Link to={"/Profile/" + this.state.userId}> Profile</Link> | </span>
    }
  }

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
            <Link to="/provider"> Provider</Link> |
            <Link to="/Register"> Register</Link> |
            {this.renderProfileLink()}
            {this.LogComponent()}
            <br/>
            <Route path="/admin" component={Admin}/>
            <Route path="/services" component={ServiceNavigatorContainer}/>
            <Route path="/provider" render={() => <Provider provider={users[0]}/>}/>
            <Route
                path="/home"
                exact
                component={() => <Home LogComponent={this.LogComponent()} />}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route
                path="/providers"
                component={ServiceProviderNavigatorContainer}/>
            <Route
                path="/login"
                component={LoginContainer}/>
            <Route
                path={"/Profile/" + this.state.userId}
                exact
                component={() => <ProfileContainer userId={this.state.userId} user={this.state.user} />}/>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
