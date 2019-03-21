import React from 'react'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceCategoryService from '../services/ServiceCategoryService'

class ServiceCategoryDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
            serviceCategory: {
                title: '',
                id: this.props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.findAllServiceCategories()
    }
    findAllServiceCategories = () =>
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                    this.props.history.push("/admin/service-categories/" + this.state.serviceCategory.id)
                    this.setState({
                        serviceCategories: serviceCategories,
                        serviceCategory: serviceCategories.find((sc) => sc.id == this.state.serviceCategory.id)
                    })
            })
    selectServiceCategory = id =>
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(serviceCategory => {
                    this.props.history.push("/admin/service-categories/" + id)
                    this.setState({
                        serviceCategory: serviceCategory
                    })
            })
    updateForm = e =>
        this.setState({
            serviceCategory: {
                title: e.target.value,
                id: this.state.serviceCategory.id
            }
        })
    createServiceCategory = () =>
        this.serviceCategoryService
            .createServiceCategory(this.state.serviceCategory)
            .then(sc => {
                this.setState({
                    serviceCategory: sc
                })
                this.findAllServiceCategories()
            })
    deleteServiceCategory = id =>
        this.serviceCategoryService
            .deleteServiceCategory(id)
            .then(this.props.history.push("/admin/service-categories/"))
    updateServiceCategory = () =>
        this.serviceCategoryService
            .updateServiceCategory(this.state.serviceCategory)
            .then(this.props.history.push("/admin/service-categories/"))
    goBack = () =>
        this.props.history.push("/admin/service-categories/")

    render = () =>
        <ServiceCategoryDetails serviceCategories={this.state.serviceCategories}
                                serviceCategory={this.state.serviceCategory}
                                selectServiceCategory={this.selectServiceCategory}
                                updateForm={this.updateForm}
                                createServiceCategory={this.createServiceCategory}
                                deleteServiceCategory={this.deleteServiceCategory}
                                updateServiceCategory={this.updateServiceCategory}
                                goBack={this.goBack}/>
}

export default ServiceCategoryDetailsContainer
