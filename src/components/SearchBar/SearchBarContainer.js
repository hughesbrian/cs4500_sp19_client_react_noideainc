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
        if(this.state.name && this.state.zip) {
            this.props.history.push({
                pathname: `/providers/${this.state.name}/${this.state.zip}`
            })
            if(this.props.findProviders) {
                this.props.findProviders()
            }          
        } else {
            alert('please enter both name and zip')
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