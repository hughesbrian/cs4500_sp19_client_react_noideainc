import React from 'react'
import SearchBar from './SearchBar'

class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            zip: ""
        }
    }

    findFilteredProviders = () => {
        var path;

        if(this.state.name && this.state.zip) {
            path = `/providers/${this.state.name}/${this.state.zip}`
        } else if(this.state.name) {
            path = `/providers/${this.state.name}`
        } else if(this.state.zip) {
            path = `/providers/${this.state.zip}`
        } else {
            alert('please enter name or zip')
            return
        }

        this.props.history.push({
            pathname: path
        })

        if(this.props.findProviders) {
            this.props.findProviders()
        } 
    }
     

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render = () => 
        <SearchBar updateField={this.updateField} name={this.state.name} zip={this.state.zip} findFilteredProviders={this.findFilteredProviders}/>
    }

export default SearchBarContainer