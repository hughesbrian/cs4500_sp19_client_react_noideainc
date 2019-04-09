import React from 'react'
import Login from '../../components/Login/Login'
import usereAnthentication from '../../services/UserAuthenticationService'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.usereAnthentication = usereAnthentication.getInstance();
        this.state = {
            email: "",
            password: ""
        }
    }

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    login = () => {
        console.log("log in")
        if (this.state.email != "" && this.state.password != "") {
            this.usereAnthentication
            .login({
                email: this.state.email,
                password: this.state.password
            })
            .then((response) => {
                //console.log(response)
                if (response != null) {
                    alert("Log in Successfully")
                    this.props.history.push("/home")
                }
            }).catch((error) => {
                console.log(error)
                alert("Please input correct email and password");
                this.setState({
                    email: "",
                    password: ""
                })
            });
        } else {
            alert("Please input email and password");
        }
    }

    render = () =>
        <Login 
            email={this.state.email}
            password={this.state.password}
            updateField={this.updateField}
            login={this.login}
        />
}

export default LoginContainer;