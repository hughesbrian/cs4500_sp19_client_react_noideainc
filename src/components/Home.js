import React from 'react'
import SearchBarContainer from './SearchBar/SearchBarContainer'
import ServiceCategoryPillsContainer from './ServiceCategoryPills/ServiceCategoryPillsContainer'
import ServiceCategoryTabsContainer from './ServiceCategoryTabs/ServiceCategoryTabsContainer'

const Home = ({history}) =>
    <div className="home-screen">
        <div className="row">
            <div className="col-8">
                <h1>
                    Find professionals near you.
                </h1>
                <SearchBarContainer history={history}/>
            </div>
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="/login">Log in</a>
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
    </div>

export default Home