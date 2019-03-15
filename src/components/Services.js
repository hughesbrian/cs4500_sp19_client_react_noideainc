import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceService from '../services/ServiceService'
class Services extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
        	editingService: {
                title: '',
                description: ''
            },
            services: []
        }
    }
    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }
    
    createService = (service) =>
    	this.serviceService
        	.createService(service)
        	.then(this.props.history.push("/admin/services/"));

    saveService = function (service) {
    	if (service.id) {
    		this.updateService(service);
    	} else {
    		this.createService(service);
    	}
    };

	updateService = (service) =>
    	this.serviceService
    		.updateService(service)
    		.then(this.props.history.push("/admin/services/"));

    deleteService = (service) =>
    	this.serviceService
    		.deleteService(service)
    		.then(this.props.history.push("/admin/services/"));
    
    render() {
        return(
            <div>
                <h3>Services</h3>
                <table className="table">
                    <tbody>
                    <tr>
                    	<td><input onChange={(e) =>
                    		this.setState({
                    			Service: {
                    				id: this.state.editingService.id,
                    				title: e.target.value,
                    				description: this.state.editingService.description
                            }
                        })} className="form-control"
                               value={this.state.editingService.title}/></td>
                    <td><input onChange={(e) =>
                        this.setState({
                        	editingService: {
                                id: this.state.editingService.id,
                                title: this.state.editingService.title,
                                description: e.target.value,
                            }
                        })} className="form-control"
                               value={this.state.editingService.description}/></td>
                    
                    <td>
                        <button className="btn btn-success" onClick={() => {
                            this.saveService(this.state.editingService)
                        }}>Save
                        </button>
                        <button className="btn btn-warning" onClick={() => {
                            this.setState({
                            	editingService: {
                                    title: '',
                                    description: ''
                                }
                            });
                        }}>Clear
                        </button>
                    </td>
                </tr>
                    {
                        this.state.services
                            .map(service =>
                                <tr key={service.id}>
                                	<td>{service.title}</td>
                                	<td>{service.description}</td>
                                    <td><Link to={"/admin/services/" + service.id}>
                                      	{service.title}
                                      	</Link></td>
                                    <td>
                                    	<button className="btn btn-primary" onClick={() => {
                                    		this.setState({editingService: service});
                                    	}}>Edit
                                    	</button>
                                    	<button className="btn btn-danger" onClick={
                                    			() => this.deleteService(service)
                                    	}>Delete
                                    	</button>
                                    </td>
                                    
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Services
