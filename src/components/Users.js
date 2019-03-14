import React from 'react'
import UserService from '../services/UserService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.state = {
            editingUser: {
                username: '',
                password: '',
                firstName: '',
                lastName: ''
            },
            users: []
        }
    }

    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }

    createUser = (user) =>
        this.userService
            .createUser(user)
            .then(this.props.history.push("/admin/users/"));

    saveUser = function (user) {
        if (user.id) {
            this.updateUser(user);
        } else {
            this.createUser(user);
        }
    };

    updateUser = (user) =>
        this.userService
            .updateUser(user)
            .then(this.props.history.push("/admin/users/"));

    deleteUser = (user) =>
        this.userService
            .deleteUser(user)
            .then(this.props.history.push("/admin/users/"));

    render() {
        return (
            <div>
                <h3>Users</h3>

                <table className="table">
                    <tbody>
                    <tr>
                        <td><input onChange={(e) =>
                            this.setState({
                                editingUser: {
                                    id: this.state.editingUser.id,
                                    username: e.target.value,
                                    password: this.state.editingUser.password,
                                    firstName: this.state.editingUser.firstName,
                                    lastName: this.state.editingUser.lastName
                                }
                            })} className="form-control"
                                   value={this.state.editingUser.username}/></td>
                        <td><input onChange={(e) =>
                            this.setState({
                                editingUser: {
                                    id: this.state.editingUser.id,
                                    username: this.state.editingUser.username,
                                    password: this.state.editingUser.password,
                                    firstName: e.target.value,
                                    lastName: this.state.editingUser.lastName
                                }
                            })} className="form-control"
                                   value={this.state.editingUser.firstName}/></td>
                        <td><input onChange={(e) =>
                            this.setState({
                                editingUser: {
                                    id: this.state.editingUser.id,
                                    username: this.state.editingUser.username,
                                    password: this.state.editingUser.password,
                                    firstName: this.state.editingUser.firstName,
                                    lastName: e.target.value
                                }
                            })} className="form-control"
                                   value={this.state.editingUser.lastName}/></td>
                        <td>
                            <button className="btn btn-success" onClick={() => {
                                this.saveUser(this.state.editingUser)
                            }}>Save
                            </button>
                            <button className="btn btn-warning" onClick={() => {
                                this.setState({
                                    editingUser: {
                                        username: '',
                                        password: '',
                                        firstName: '',
                                        lastName: ''
                                    }
                                });
                            }}>Clear
                            </button>
                        </td>
                    </tr>
                    {
                        this.state.users
                            .map(user =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {
                                            this.setState({editingUser: user});
                                        }}>Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={
                                            () => this.deleteUser(user)
                                        }>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users