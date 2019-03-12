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
            .createServiceCategory(this.state.serviceCategory)
            .then(sc => {
                console.log(sc)
                this.setState({
                    serviceCategory: sc
                })
                this.findAllServiceCategories()
            })
    deleteServiceCategory = id => {
        this.serviceCategoryService
            .deleteServiceCategory(id)
            .then(this.findAllServiceCategories)
    }
    updateServiceCategory = () =>
        this.serviceCategoryService
            .updateServiceCategory(this.state.serviceCategory)
            .then(this.findAllServiceCategories)
    searchServiceCategory = () =>
        this.serviceCategoryService
            .filteredServiceCategories(document.getElementById("title-input").value)
            .then(scs => {
                console.log(scs)
                if(scs != undefined && scs.length != 0) {
                    console.log(scs[0])
                    this.setState({
                        serviceCategory: scs[0]
                    })
                }
                else {
                    // maybe do nothing
                    console.log("huh?")
                }
            })
    goBack = () => {
        // you know
    }
    render() {
        return(
            <div>
                <h3>Service Category Details</h3>
                <select
                    value={this.state.serviceCategory.id}
                    onChange={(e) => this.selectServiceCategory(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceCategories
                            .map(sc =>
                                <option
                                    value={sc.id}
                                    key={sc.id}>
                                    {sc.title}
                                </option>
                            )
                    }
                </select>
                <br/>
                <label>Service Category</label><br/>
                <input
                    id="title-input"
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.serviceCategory.title}/>
                <br/>
                <button className="btn btn-danger" onClick={this.goBack}>
                    Back
                </button>
                <button className="btn btn-primary" onClick={this.createServiceCategory}>
                    Create
                </button>
                <button className="btn btn-danger" onClick={() => this.deleteServiceCategory(this.state.serviceCategory.id)}>
                    Delete
                </button>
                <button className="btn btn-success" onClick={this.updateServiceCategory}>
                    Update
                </button>
                <button className="btn btn-warning" onClick={this.searchServiceCategory}>
                    Search
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
