import React from 'react'
import ServiceCategoryPills from './ServiceCategoryPills'
import ServiceCategoryService from '../../services/ServiceCategoryService'

class ServiceCategoryPillsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            serviceCategories: []
        }
    }

    componentDidMount() {
        this.findAllServiceCategories()
    }

    findAllServiceCategories = () =>
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                this.setState({
                    serviceCategories: this.findTopPopularity(serviceCategories)
                })
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
            if (filterArray.length > 3) {
                filterArray = filterArray.slice(0, 3);
            }
        })
        console.log(filterArray)
        return filterArray;
    }

    // increase score when one service category icon is clicked
    updateScore = (serviceCategory) => {
        serviceCategory.score = serviceCategory.score + 1;
        //alert("update score")
        //alert(serviceCategory.score)
        this.serviceCategoryService
            .updateServiceCategoryScore(serviceCategory)
            .then()
    }

    render = () =>
        <ServiceCategoryPills serviceCategories={this.state.serviceCategories} updateScore={this.updateScore} />

}

export default ServiceCategoryPillsContainer
