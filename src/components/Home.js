import React from 'react'
import SearchBar from './SearchBar/SearchBar'
// import ServiceTabNavigator from './ServiceTabNavigator/ServiceTabNavigator'
import ServiceCategoryPillsContainer from './ServiceCategoryPills/ServiceCategoryPillsContainer'
// import serviceCategories from '../data/service-categories.mock.json'
const Home = ({history}) =>
    <div className="home-screen">
        <div className="row">
            <div className="col-8">
                <h1>
                    Find professionals near you.
                </h1>
                {/* <SearchBar history={history}/> */}
            </div>
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <ServiceCategoryPillsContainer/>
        </div>
        <br/>
        <br/>
        <br/>
        {/* <ServiceTabNavigator serviceCategories={serviceCategories}/> */}
    </div>

export default Home