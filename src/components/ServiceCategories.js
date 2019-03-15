import React from 'react'
import {Link} from 'react-router-dom'
import ServiceCategoryService from '../services/ServiceCategoryService'

class ServiceCategories extends React.Component {
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
                console.log(response)
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
        console.log(this.state.serviceCategory)
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
    setCount = count => {
        this.state.count = count
        this.findAllServiceCategories()
    }
    loadOptions = () => {
        var options = []
        for(var x = 0; x < this.state.totalPages; x++) {
            options.push(<option key={x} value={x}>{x + 1}</option>)
        }
        return options
    }

    render() {
        return(
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <b>Title</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                onChange={e => this.updateForm(e)}
                                value={this.state.serviceCategory.title}></input>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={this.createServiceCategory}>Add</button>
                            <button className="btn btn-success" onClick={this.updateServiceCategory}>Update</button>
                        </td>
                    </tr>
                    {
                        this.state.serviceCategories.map(sc =>
                            <tr key={sc.id}>
                                <td>{sc.title}</td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteServiceCategory(sc.id)}>
                                    Delete
                                </button>
                                <button className="btn btn-primary" onClick={() => this.selectServiceCategory(sc.id)}>
                                    Edit
                                </button>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <div className="row">
                                <div className="col-3">
                                    <select
                                        id="select-page"
                                        value={this.state.page}
                                        onChange={this.setPageSelect}
                                        className="form-control">
                                        {
                                            [...Array(this.state.totalPages).keys()].map(x =>
                                                <option key={x} value={x}>{x + 1}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="col-9">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <button className="page-link"
                                                        onClick={() => this.setPagePagination(this.state.page - 1)}>
                                                    Previous
                                                </button>
                                            </li>
                                            {
                                                [...Array(this.state.totalPages).keys()].map(x =>
                                                    <li key={x} className="page-item">
                                                        <button className="page-link"
                                                                onClick={() => this.setPagePagination(x)}>
                                                            {x + 1}
                                                         </button>
                                                    </li>
                                                )
                                            }
                                            <li className="page-item">
                                                <button className="page-link"
                                                        onClick={() => this.setPagePagination(this.state.page + 1)}>
                                                    Next
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </td>
                        <td>
                            {/* just for alignment */}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceCategories
