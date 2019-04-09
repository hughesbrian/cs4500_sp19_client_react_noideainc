import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'
import SearchBarContainer from '../SearchBar/SearchBarContainer';

const ServiceNavigator = ({serviceCategories, history}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <SearchBarContainer history={history}/>
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
                <ServiceCategoryList
                    serviceCategories={serviceCategories}/>
            </div>
            <div className="col-9">
                <ServiceCategorySectionList
                    serviceCategories={serviceCategories}/>
            </div>
        </div>
    </div>

export default ServiceNavigator
