import ServiceProviderFilter from '../SearchProviders//ServiceProviderFilter'
import ServiceProviderList from '../SearchProviders/ServiceProviderList'
import SearchBarContainer from '../SearchBar/SearchBarContainer'
import React from 'react';
import SearchList from "./SearchList";

const BusinessService = ({history, serviceProviders, serviceCategories, serviceQuestions, Criteria, add_Criteria, send_request, findProviders, Services, BusinessServices, FilterServices, addService, UpdateQuestions, RemoveFromServiceList, UpdateProviderInfo}) =>
    <div>
        <br/>
        <br/>

        <div className="row">
            <div>
            <label>input</label><br/>
                <input
                    onChange = { (e) => FilterServices(e.target.value)}
                    className="create-min"
                    />

                <br/>
            <select 
                onChange={(e) => addService(e.target.value)}
                className="select-question">
                    {
                        Services
                            .map(service =>
                                <option
                                    value={service.id}
                                    key={service.title}>
                                    {service.title}
                                </option>
                            )
                    }
            </select>
                <ul id="myUL">
                    <SearchList Services = {BusinessServices} UpdateQuestions = {UpdateQuestions} RemoveFromServiceList = {RemoveFromServiceList}/>
                </ul>
            </div>

            <div className="col-3 text-right">
                <ServiceProviderFilter
                    serviceQuestions={serviceQuestions}
                    Criteria = {Criteria}
                    add_Criteria = {add_Criteria}
                />

                <button onClick={() => UpdateProviderInfo()}> APPLY </button>

            </div>

        </div>

    </div>

export default BusinessService