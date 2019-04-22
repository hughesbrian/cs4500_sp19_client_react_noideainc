import React from 'react'
import Profile from '../../components/Profile/Profile'
import userService from '../../services/UserService'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = userService.getInstance();
        this.state = {
            user: {},
            userId: props.userId,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            birthday: props.user.birthday,
            address: {
                street: "",
                city: "",
                state: "",
                zip: "",
                addressType: 0,
                residentId: props.userId
            },
            email: ""
        }
        this.businessAddress = null
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
    }

    componentDidMount() {
        this.userService
            .findUserById(this.state.userId)
            .then(user => {
                this.setState({
                    user: user,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    birthday: user.birthday,
                    email: user.email,
                    address: user.addresses[0]
                })
            })
    }

    handleChangeInput(event) {
        event.preventDefault();
        this.setState({
            ...this.state,
            address: {
                ...this.state.address,
                [event.target.name]: event.target.value
            },
            [event.target.name]: event.target.value
        });
    }

    updateProfile(event) {
        event.preventDefault();
        // console.log("form submitted")
        const newData = {
            id: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthday: this.state.birthday,
            addresses: this.state.user.addresses,
            email: this.state.email
        }
        newData.addresses[0].id = this.state.address.id
        newData.addresses[0].street = this.state.address.street
        newData.addresses[0].city = this.state.address.city
        newData.addresses[0].state = this.state.address.state
        newData.addresses[0].zip = this.state.address.zip

        this.userService
            .updateProfile(newData)
            .then(alert("profile updated sucessfully"))

    }

    render = () => {
        return <Profile
                    userId={this.state.userId}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    birthday={this.state.birthday}
                    address={this.state.address}
                    email={this.state.email}
                    handleChangeInput={this.handleChangeInput}
                    updateProfile={this.updateProfile}
                />
    }
}

export default ProfileContainer;
