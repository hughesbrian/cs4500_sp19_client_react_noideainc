import React from 'react';
import UserDetails from './UserDetails'
import UserService from "../services/UserService";

class UserDetailsContainer extends React.Component {
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

    setUser = (new_attrs) => this.setState(new_attrs);

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

    redirect = (path) =>
        this.props.history.push(path);

    render = () => <UserDetails users={this.state.users}
                                user={this.state.user}
                                cancel={this.cancel}
                                setUser={this.setUser}
                                selectUser={this.selectUser}
                                createUser={this.createUser}
                                updateUser={this.updateUser}
                                deleteUser={this.deleteUser}
                                redirect={this.redirect}/>;
}

export default UserDetailsContainer