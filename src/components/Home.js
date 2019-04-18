import React from 'react'
import SearchBarContainer from './SearchBar/SearchBarContainer'
import ServiceCategoryPillsContainer from './ServiceCategoryPills/ServiceCategoryPillsContainer'
import ServiceCategoryTabsContainer from './ServiceCategoryTabs/ServiceCategoryTabsContainer'

class Home extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            LogComponent: props.LogComponent
        }
    }

    render() {
        return (
            <div className="home-screen">
                <div className="row">
                    <div className="col-8">
                        <h1>
                            Find professionals near you.
                        </h1>
                        <SearchBarContainer history={this.props.history}/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <ServiceCategoryPillsContainer/>
                    <br/>
                    <br/>
                    <br/>
                    <ServiceCategoryTabsContainer/>
                </div>
                <br/>
                <br/>
                <br/>
                {/* <ServiceTabNavigator serviceCategories={serviceCategories}/> */}
            </div>)
    }
}

export default Home