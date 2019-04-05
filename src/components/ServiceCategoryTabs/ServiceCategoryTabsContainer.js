import React from 'react'
import ServiceCategoryTabs from './ServiceCategoryTabs'
import ServiceCategoryService from '../../services/ServiceCategoryService'
import { withRouter } from 'react-router-dom'

class ServiceCategoryTabsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
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
                        serviceCategories: this.findTopPopularity(serviceCategories)
                    })
                }
            )

    // find the top three popularity service categories and display them in pills
    findTopPopularity = (serviceCategories) => {
        let filterArray = [];
        serviceCategories.forEach((item) => {
            let start = 0;
            while (filterArray.length > start) {
                if (item.score > filterArray[start]) {
                    break;
                }
                start++;
            }
            filterArray.splice(start, 1, item)
            if (filterArray.length > 10) {
                filterArray = filterArray.slice(0, 10);
            }
        })
        console.log(filterArray)
        return filterArray;
    }

    updateScore = (serviceCategory) => {
        serviceCategory.score = serviceCategory.score + 1;
        this.serviceCategoryService
            .updateServiceCategoryScore(serviceCategory)
            .then()

    }

    handleTabClick(category) {
        const categoryName = category.title
        console.log("in handle click")
        console.log(categoryName)
        this.serviceCategoryService
            .findAllServicesByCategoryName(categoryName)
            .then(services => {
                // this.props.history.push("/" + categoryName)
                this.setState({
                    services: services,
                    activeCategory: category
                })
            })
    }

    render = () => {
        return(
              <ServiceCategoryTabs serviceCategories={this.state.serviceCategories} 
                updateScore={this.updateScore}
                handleTabClick={this.handleTabClick}
                services={this.state.services}
                activeCategory={this.state.activeCategory}  />
        )
    }
}

// export default withRouter(ServiceCategoryTabsContainer)
export default ServiceCategoryTabsContainer