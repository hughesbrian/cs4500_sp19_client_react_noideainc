import React from 'react'
import SearchBar from './SearchBar'
import UserService from '../../services/UserService'

class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.state = {
            name: "",
            zip: "",
            filteredProviders: []
        }
    }

    componentDidMount() {
        // this.findFilteredProviders()
    }

    findFilteredProviders = () => {
        // this.userService
        // .findFilteredProviders(this.state.name, this.state.zip)
        // .then(filteredProviders =>
        //     this.setState({
        //         filteredProviders: filteredProviders
        //     })
        // )
        // history.push('/providers')
        alert("searching by name: " + this.state.name + " and zip code: " + this.state.zip)   
    }
     

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render = () => 
        <SearchBar history={this.props.history} filteredProviders={this.filteredProviders} updateField={this.updateField} name={this.state.name} zip={this.state.zip} findFilteredProviders={this.findFilteredProviders}/>
    }

export default SearchBarContainer