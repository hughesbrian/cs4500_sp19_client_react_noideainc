import React from 'react'
import _ from 'lodash'
import Business from '../../components/Business/Business'
import userService from '../../services/UserService'

class BusinessContainer extends React.Component {
    constructor(props) {
        super(props);
        let {userId} = props
        this.userService = userService.getInstance();
        this.state = {
            user: {
                id: userId
            },
            businessName: "",
            yearFounded: 0,
            numOfEmployees: 0,
            businessEmail: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            facebook: "",
            instagram: "",
            twitter: "",
            creditCard: false,
            cash: false,
            check: false,
            venmo: false,
            paypal: false,
            square: false,
            bitcoin: false
        }
    }

    updateState = userInfo => {
        console.log(userInfo)
        let businessAddress = userInfo.addresses[1]
        this.setState({
            user: userInfo,
            businessName: userInfo.businessName ? userInfo.businessName : "",
            yearFounded: userInfo.yearFounded ? userInfo.yearFounded : 0,
            numOfEmployees: userInfo.numOfEmployees ? userInfo.numOfEmployees : 0,
            businessEmail: userInfo.businessEmail ? userInfo.businessEmail : "",
            street: businessAddress ? businessAddress.street : "",
            city: businessAddress ? businessAddress.city : "",
            state: businessAddress ? businessAddress.state : "",
            zip: businessAddress ? businessAddress.zip : "",
            facebook: userInfo.facebook ? userInfo.facebook : "",
            instagram: userInfo.instagram ? userInfo.instagram : "",
            twitter: userInfo.twitter ? userInfo.twitter : "",
            creditCard: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "CreditCard"})),
            cash: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Cash"})),
            check: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Check"})),
            venmo: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Venmo"})),
            paypal: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Paypal"})),
            square: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Square"})),
            bitcoin: Boolean(_.find(userInfo.paymentMethods, {paymentMethod: "Bitcoin"}))
        })
    }

    componentDidMount() {
        this.userService
            .findUserById(this.state.user.id)
            .then(userInfo => {
                this.updateState(userInfo)
            })
    }

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    updateCheckbox = (e) => {
        let name = e.target.name
        console.log(this.state[name])
        document.getElementById(name).checked = !this.state[name]
        this.setState({
            [name]: !this.state[name]
        })
    }

    save = () => {
        this.state.user.businessName = this.state.businessName
        this.state.user.yearFounded = this.state.yearFounded
        this.state.user.numOfEmployees = this.state.numOfEmployees
        this.state.user.businessEmail = this.state.businessEmail

        let businessAddress = this.state.user.addresses[1]
        businessAddress.street = this.state.street
        businessAddress.city = this.state.city
        businessAddress.state = this.state.state
        businessAddress.zip = this.state.zip


        this.state.user.paymentMethods = []
        if(document.getElementById("creditCard").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "CreditCard"})) {
            this.state.user.paymentMethods.push({paymentMethod: "CreditCard"})
        }
        if(document.getElementById("cash").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Cash"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Cash"})
        }
        if(document.getElementById("check").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Check"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Check"})
        }
        if(document.getElementById("venmo").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Venmo"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Venmo"})
        }
        if(document.getElementById("paypal").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Paypal"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Paypal"})
        }
        if(document.getElementById("square").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Square"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Square"})
        }
        if(document.getElementById("bitcoin").checked &&
           !_.find(this.state.user.paymentMethods, {paymentMethod: "Bitcoin"})) {
            this.state.user.paymentMethods.push({paymentMethod: "Bitcoin"})
        }
        this.state.user.facebook = this.state.facebook
        this.state.user.instagram = this.state.instagram
        this.state.user.twitter = this.state.twitter
        this.state.user.userType = 'Provider'
        this.state.user.hires = 0
        this.state.user.rating = 0
        this.state.user.backgroundChecked = true

        console.log(this.state.user)
        this.userService
            .updateUser(this.state.user)
            .then(updatedUser => {
                this.updateState(updatedUser)
                window.alert("Successfully updated business information.")
            })
    }

    render = () =>
        <Business user={this.state.user}
                  businessName={this.state.businessName}
                  yearFounded={this.state.yearFounded}
                  numOfEmployees={this.state.numOfEmployees}
                  businessEmail={this.state.businessEmail}
                  street={this.state.street}
                  city={this.state.city}
                  state={this.state.state}
                  zip={this.state.zip}
                  facebook={this.state.facebook}
                  instagram={this.state.instagram}
                  twitter={this.state.twitter}
                  creditCard={this.state.creditCard}
                  cash={this.state.cash}
                  check={this.state.check}
                  venmo={this.state.venmo}
                  paypal={this.state.paypal}
                  square={this.state.square}
                  bitcoin={this.state.bitcoin}
                  updateField={this.updateField}
                  updateCheckbox={this.updateCheckbox}
                  save={this.save}/>
}

export default BusinessContainer;
