import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'

class ServiceCategoryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
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
                    this.props.history.push("/admin/service-categories/" + this.state.serviceCategory.id);
                    this.setState({
                        serviceCategories: serviceCategories,
                        serviceCategory: serviceCategories.find((sc) => sc.id == this.state.serviceCategory.id)
                    })
            })
    selectServiceCategory = id =>
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(serviceCategory => {
                    this.props.history.push("/admin/service-categories/" + id);
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
            .createQuote(this.state.serviceCategory)
            .then(this.findAllServiceCategories)
    deleteServiceCategory = id =>
        this.serviceCategoryService
            .deleteQuote(id)
            .then(this.findAllServiceCategories)
    updateServiceCategory = () =>
        this.serviceCategoryService
            .updateServiceCategory(this.state.serviceCategory)
            .then(this.findAllServiceCategories)
    render() {
        return(
            <div>
                <h3>Service Category Details</h3>
                <select
                    value={this.state.serviceCategory.id}
                    onChange={(e) => this.selectServiceCategory(e.target.value)}
                    className="form-control">
                    {
                        this.state.quotes
                            .map(sc =>
                                <option
                                    value={sc.id}
                                    key={sc.id}>
                                    {sc.id}
                                </option>
                            )
                    }
                </select>
                <label>Service Category</label><br/>
                <input
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.serviceCategory.title}/>
                <button onClick={this.createServiceCategory}>
                    Create
                </button>
                <button onClick={() => this.deleteServiceCategory(this.state.serviceCategory.id)}>
                    Delete
                </button>
                <button onClick={this.updateServiceCategory}>
                    Update
                </button>
            </div>
        )
    }
}

export default ServiceCategoryDetails



/*
render() {
    return (
        <div>
            <h3>Service Category Details</h3>
            <select
                value={this.state.serviceCategory.id}
                onChange={(e) => this.selectServiceCategory(e.target.value)}
                className="form-control">
                {
                    this.state.serviceCategories
                        .map(serviceCategory =>
                            <option
                                value={serviceCategory.id}
                                key={serviceCategory.id}>
                                {serviceCategory.title}
                            </option>
                        )
                }
            </select>
            <label>Service Category Title</label><br/>
            <input
                onChange={() => {
                }}
                className="form-control"
                value={this.state.serviceCategory.title}/>
        </div>
    )
}
*/
