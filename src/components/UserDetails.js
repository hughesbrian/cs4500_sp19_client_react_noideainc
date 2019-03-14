import React from 'react'
import UserService from '../services/UserService'

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.state = {
            users: [],
            user: {
                username: '',
                firstName: '',
                lastName: '',
            }
        }
    }

    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users => {
                    this.props.history.push("/admin/users/" + users[0].id);
                    this.setState({
                        users: users,
                        user: users[0]
                    })
                }
            )
    }

    cancel = () =>
        this.props.history.push("/admin/users");

    selectUser = function (id) {
        if (id > 0) {
            return this.userService
                .findUserById(id)
                .then(user => {
                    this.props.history.push("/admin/users/" + id);
                    this.setState({
                        user: user
                    })
                });
        } else {
            this.props.history.push("/admin/users/new");
            this.setState({
                user: {
                    username: 'Enter a Username Here',
                    password: 'Enter a Password Here',
                    firstName: 'Enter a First Name Here',
                    lastName: 'Enter a Last Name Here'
                }
            });
        }
    };

    createUser = () =>
        this.userService
            .createUser(this.state.user);

    updateUser = () =>
        this.userService
            .updateUser(this.state.user)
            .then(this.props.history.push("/admin/users/"));

    deleteUser = () =>
        this.userService
            .deleteUser(this.state.user)
            .then(this.props.history.push("/admin/users/"));

    render() {
        return (
            <div>
                <div>
                    <h3>User Details</h3>
                    <select
                        value={this.state.user.id}
                        onChange={(e) => this.selectUser(e.target.value)}
                        className="form-control">
                        <option value={-1} key={-1}>New User</option>
                        {
                            this.state.users
                                .map(user =>
                                    <option
                                        value={user.id}
                                        key={user.id}>
                                        {user.username}
                                    </option>
                                )
                        }
                    </select>
                    <label>Username</label><br/>
                    <input onChange={(e) =>
                        this.setState({
                            user: {
                                id: this.state.user.id,
                                username: e.target.value,
                                password: this.state.user.password,
                                firstName: this.state.user.firstName,
                                lastName: this.state.user.lastName
                            }
                        })} className="form-control"
                           value={this.state.user.username}/>
                    <label>Password</label>
                    <input onChange={(e) =>
                        this.setState(
                            {
                                user: {
                                    id: this.state.user.id,
                                    username: this.state.user.username,
                                    password: e.target.value,
                                    firstName: this.state.user.firstName,
                                    lastName: this.state.user.lastName
                                }
                            })} className="form-control"
                           value={this.state.user.password}/>
                    <label>First Name</label>
                    <input onChange={(e) =>
                        this.setState({
                            user: {
                                id: this.state.user.id,
                                username: this.state.user.username,
                                password: this.state.user.password,
                                firstName: e.target.value,
                                lastName: this.state.user.lastName
                            }
                        })} className="form-control"
                           value={this.state.user.firstName}/>
                    <label>Last Name</label>
                    <input onChange={(e) =>
                        this.setState({
                            user: {
                                id: this.state.user.id,
                                username: this.state.user.username,
                                password: this.state.user.password,
                                firstName: this.state.user.firstName,
                                lastName: e.target.value
                            }
                        })} className="form-control"
                           value={this.state.user.lastName}/>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                    <button className="btn btn-danger" onClick={
                        () => {this.deleteUser().then(window.setTimeout(this.props.history.push("/admin/users/"), 500))}
                    }>Delete User</button>
                    <button className="btn btn-primary" onClick={
                        () => {this.createUser().then(window.setTimeout(this.props.history.push("/admin/users/"), 500))}
                    }>Add User</button>
                    <button className="btn btn-success" onClick={
                        () => {this.updateUser().then(window.setTimeout(this.props.history.push("/admin/users/"), 500))}
                    }>Update User</button>
                </div>
            </div>
        )
    }
}

export default UserDetails