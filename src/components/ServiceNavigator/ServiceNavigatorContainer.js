import React from 'react'
import _ from 'lodash'
import ServiceNavigator from './ServiceNavigator'
import ServiceCategoryService from '../../services/ServiceCategoryService'
import ServiceService from '../../services/ServiceService'

class ServiceNavigatorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.serviceService = ServiceService.getInstance();
        this.state = {
            serviceCategories: []
        }
    }

    componentDidMount() {
        this.findAll()
    }

    findAll = () =>
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                this.serviceService
                    .findAllServices()
                    .then(services => {
                        serviceCategories.forEach(sc =>
                            sc.services = services.filter(s =>
                                _.filter(s.serviceCategories, ['title', sc.title]).length > 0
                            ))

                        this.setState({
                            serviceCategories: serviceCategories,
                        })
                    })
            )

    render = () =>
        <ServiceNavigator serviceCategories={this.state.serviceCategories} history={this.props.history}/>

}

export default ServiceNavigatorContainer
