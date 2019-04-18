import React from 'react'
import userAuthentication from '../../services/UserAuthenticationService'
import Register from './Register';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userAuthentication = userAuthentication.getInstance()
        this.state = {
            first: "",
            last: "",
            username: "",
            email:"",
            password: ""
        }
    }

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    register = () => {
        if (this.state.first && this.state.last && this.state.username && this.state.email && this.state.password) {
            this.userAuthentication
            .register({
                firstName: this.state.first,
                lastName: this.state.last,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then(
                (res) => {
                    if(res != null & res.email != null) {
                        alert("successfully registered!")
                        this.login()
                    } else {
                        alert("Email is already used. Please use a different email!");
                    }
                }
            ).catch(function (error) {
                console.log(error)
            });
        } else {
            alert("please input all the information");
        }
    }

    login = () => {
        console.log("called login")
        this.userAuthentication
        .login({
            email: this.state.email,
            password: this.state.password
        })
        .then((response) => {
            console.log(response)
            if (response != null && response.email != null && response.password != null) {
                this.props.history.push("/Profile/" + response.id)
                window.location.reload()
            }
        }).catch((error) => {
            console.log(error)
            this.setState({
                first: "",
                last: "",
                username: "",
                email: "",
                password: ""
            })
        });
    } 

    render = () => {
        return(
            <Register 
            first={this.state.first} 
            last={this.state.last} 
            username={this.state.username}
            email={this.state.email} 
            password={this.state.password}
            updateField={this.updateField}
            register={this.register}
            />
        )
    }
}

export default RegisterContainer