import React from 'react'
import UserService from '../../services/UserService'
import Register from './Register';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
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

    createUser = () => {
        if (this.state.first && this.state.last && this.state.username && this.state.email && this.state.password) {
            this.userService
            .createUser({
                firstName: this.state.first,
                lastName: this.state.last,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }).then(
                (res) => {
                    this.setState({
                        first: "",
                        last: "",
                        username: "",
                        email: "",
                        password: ""
                    })
                    alert("added a user")
                    this.props.history.push("/home") // change this to profile page once it's implemented!
                }
            ).catch(function (error) {
                alert("Failed to create a new User");
            });
        } else {
            alert("please input all the information");
        }
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
            createUser={this.createUser}
            />
        )
    }
}

export default RegisterContainer