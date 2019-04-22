import React from 'react'
import ServiceProviderFilter from './ServiceProviderFilter'
import ServiceProviderList from './ServiceProviderList'
import SearchBarContainer from '../SearchBar/SearchBarContainer'

const ServiceProviderNavigator = ({history, serviceProviders, serviceCategories, serviceQuestions, Criteria, add_Criteria, findProviders}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <SearchBarContainer findProviders={findProviders} history={history}/>
            </div>
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