import React from 'react'
import ServiceProviderFilter from './ServiceProviderFilter'
import ServiceProviderList from './ServiceProviderList'
import SearchBar from '../SearchBar/SearchBar'

const ServiceProviderNavigator = ({serviceProviders, serviceCategories, serviceQuestions, Criteria, add_Criteria,send_request}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <SearchBar history = {[{history: "history"}]}/>
            </div>
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
            <button className="button" onClick={send_request}>
                SEARCH HERE
            </button>
        </div>
        <br/>
        <br/>
        <script>console.log(add_Criteria);</script>

        <div className="row">
            <div className="col-3">
                <ServiceProviderFilter
                    serviceQuestions={serviceQuestions}
                    Criteria = {Criteria}
                    add_Criteria = {add_Criteria}
                />
            </div>
            <div className="col-9">
                <ServiceProviderList
                    serviceProviders={serviceProviders}/>
            </div>
        </div>
    </div>


export default ServiceProviderNavigator