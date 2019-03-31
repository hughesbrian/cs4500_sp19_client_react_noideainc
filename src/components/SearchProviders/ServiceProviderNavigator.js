import React from 'react'
import ServiceProviderFilter from './ServiceProviderFilter'
import ServiceProviderList from './ServiceProviderList'
import SearchBar from '../SearchBar/SearchBar'

const ServiceProviderNavigator = ({serviceProviders, serviceCategories, serviceQuestions}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <SearchBar/>
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

        <div className="row">
            <div className="col-3">
                <ServiceProviderFilter
                    serviceQuestions={serviceQuestions}
                />
            </div>
            <div className="col-9">
                <ServiceProviderList
                    serviceProviders={serviceProviders}/>
            </div>
        </div>
    </div>

export default ServiceProviderNavigator