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
                    email: user.email
                })

                if (user.addresses != null) {
                    if (user.addresses.length >= 1) {
                        for (let i = 0; i < user.addresses.length; i++) {
                            if (user.addresses[i].addressType === 0) {
                                const initAddress = user.addresses[i];
                                this.setState({
                                    address: {
                                        street: initAddress.street,
                                        city: initAddress.city,
                                        state: initAddress.state,
                                        zip: initAddress.zip
                                    }
                                })

                                if (user.addresses.length === 2) {
                                    if (user.addresses[1].addressType === 1) {
                                        this.businessAddress = user.addresses[1]
                                    }
                                }
                                break
                            }
                        }
                    }
                }
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
            addresses: [
                {
                    street: this.state.address.street,
                    city: this.state.address.city,
                    state: this.state.address.state,
                    zip: this.state.address.zip,
                    addressType: 0,
                    residentId: this.state.userId
                },
                
                this.businessAddress
            ],
            email: this.state.email
        }
        
        this.userService
            .updateProfile(newData)
            .then(alert("profile updated sucessfully"))

    }

    render = () => {
        return <Profile 
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