import React from 'react'
import SearchBarContainer from './SearchBar/SearchBarContainer'
import ServiceCategoryPillsContainer from './ServiceCategoryPills/ServiceCategoryPillsContainer'
import ServiceCategoryTabsContainer from './ServiceCategoryTabs/ServiceCategoryTabsContainer'

class Home extends React.Component {
    constructor(props) {
        console.log(props.LogComponent)
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
                        {/* <SearchBar history={history}/> */}
                        <SearchBarContainer />
                    </div>
                    <div className="col-3 text-right">
                        <a href="#">Sign up</a>
                    </div>
                    <div className="col-1">
                        {this.state.LogComponent}
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