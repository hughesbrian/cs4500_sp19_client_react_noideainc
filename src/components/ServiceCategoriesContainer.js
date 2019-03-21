import React from 'react'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryService from '../services/ServiceCategoryService'

class ServiceCategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            page: 0,
            count: 10,
            totalPages: 1,
            serviceCategories: [],
            serviceCategory: {
                title: '',
            }
        }
    }
    componentDidMount() {
        this.findAllServiceCategories()
    }
    findAllServiceCategories = () =>
        this.serviceCategoryService
            .pagedServiceCategories(this.state.page, this.state.count)
            .then(response => {
                this.setState({
                    serviceCategories: response.content,
                    totalPages: response.totalPages
                })
            })
    updateForm = e =>
        this.setState({
            serviceCategory: {
                id: this.state.serviceCategory.id,
                title: e.target.value
            }
        })
    createServiceCategory = () => {
        this.serviceCategoryService
            .createServiceCategory(this.state.serviceCategory)
            .then(this.findAllServiceCategories)
    }
    deleteServiceCategory = id =>
        this.serviceCategoryService
            .deleteServiceCategory(id)
            .then(this.findAllServiceCategories)
    selectServiceCategory = id =>
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(sc => this.setState({
                serviceCategory: sc
            }))
    updateServiceCategory = () =>
        this.serviceCategoryService
            .updateServiceCategory(this.state.serviceCategory)
            .then(this.findAllServiceCategories)
    setPageSelect = () => {
        this.state.page = document.getElementById("select-page").value
        this.findAllServiceCategories()
    }
    setPagePagination = page => {
        if(page < this.state.totalPages && page >= 0) {
            this.state.page = page
            this.findAllServiceCategories()
        }
    }

    render = () =>
        <ServiceCategories page={this.state.page}
                           count={this.state.count}
                           totalPages={this.state.totalPages}
                           serviceCategories={this.state.serviceCategories}
                           serviceCategory={this.state.serviceCategory}
                           updateForm={this.updateForm}
                           createServiceCategory={this.createServiceCategory}
                           deleteServiceCategory={this.deleteServiceCategory}
                           selectServiceCategory={this.selectServiceCategory}
                           updateServiceCategory={this.updateServiceCategory}
                           setPageSelect={this.setPageSelect}
                           setPagePagination={this.setPagePagination}/>
}

export default ServiceCategoriesContainer
