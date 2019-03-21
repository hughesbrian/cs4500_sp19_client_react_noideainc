import React from 'react';
import Users from './Users';
import UserService from "../services/UserService";

class UsersContainer extends React.Component {
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

    saveUser = function (user, updateUser, createUser) {
        if (user.id) {
            updateUser(user);
        } else {
            createUser(user);
        }
    };

    setEditingUser = (new_attrs) =>
        this.setState(new_attrs);

    updateUser = (user) =>
        this.userService
            .updateUser(user)
            .then(this.props.history.push("/admin/users/"));

    deleteUser = (user) =>
        this.userService
            .deleteUser(user)
            .then(this.props.history.push("/admin/users/"));

    render = () => <Users users={this.state.users}
                          editingUser={this.state.editingUser}
                          setEditingUser={this.setEditingUser}
                          createUser={this.createUser}
                          updateUser={this.updateUser}
                          deleteUser={this.deleteUser}
                          saveUser={this.saveUser}/>;
}

export default UsersContainer