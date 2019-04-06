import React from 'react'
import ServiceCategoryTabs from './ServiceCategoryTabs'
import ServiceCategoryService from '../../services/ServiceCategoryService'
import ServiceService from '../../services/ServiceService'

class ServiceCategoryTabsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.serviceService = ServiceService.getInstance();
        this.state = {
            serviceCategories: [],
            services: [],
            activeCategory: null
        }
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    componentDidMount() {
        this.findAllServiceCategories()
    }

    findAllServiceCategories = () =>
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                    this.setState({
                        serviceCategories: this.findTopCategories(serviceCategories)
                    })
                }
            )

    findAllServicesByCategoryName = () =>
        this.serviceCategoryService
            .findAllServicesByCategoryName(this.state.activeCategory.title)
            .then(services => {
                this.setState({
                    services: this.findTopServices(services)
                })
            })
    
    // find the top 10 service categories to be displayed in navigation tabs
    findTopCategories = (serviceCategories) => {
        serviceCategories.sort(function(a, b){
            let cateA = a.score, cateB = b.score
            if (cateA < cateB)
                return 1 
            if (cateA > cateB)
                return -1
            return 0 // default return value (no sorting)
        })

        if (serviceCategories.length > 10) {
            return serviceCategories.slice(0, 10);
        }
        return serviceCategories;
    }

    // find top 6 services in the active category (sort descending)
    findTopServices = (services) => {
        // console.log("top services:")
        // console.log(services)
        services.sort(function(a, b){
            let serviceA = a.score, serviceB = b.score
            if (serviceA < serviceB)
                return 1 
            if (serviceA > serviceB)
                return -1
            return 0 // default return value (no sorting)
        })

        if (services.length > 6) {
            return services.slice(0, 6);
        }
        return services;
    }

    updateCategoryScore = (serviceCategory) => {
        serviceCategory.score = serviceCategory.score + 1;
        this.serviceCategoryService
            .updateServiceCategoryScore(serviceCategory)
            .then()

    }

    updateServiceScore = (service) => {
        service.score = service.score + 1;
        this.serviceService
            .updateServiceScore(service)
            .then()
    }

    handleTabClick(category) {
        const categoryName = category.title
        this.updateCategoryScore(category)
        this.serviceCategoryService
            .findAllServicesByCategoryName(categoryName)
            .then(services => {
                this.setState({
                    services: this.findTopServices(services),
                    activeCategory: category
                })
            })
    }

    render = () => {
        return(
              <ServiceCategoryTabs serviceCategories={this.state.serviceCategories} 
                updateServiceScore={this.updateServiceScore}
                handleTabClick={this.handleTabClick}
                services={this.state.services}
                activeCategory={this.state.activeCategory}  />
        )
    }
}

export default ServiceCategoryTabsContainer