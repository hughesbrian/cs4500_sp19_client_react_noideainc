import React from 'react'
import ServiceService from '../services/ServiceService'
class ServiceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
            services: [],
            service: {
                title: '',
                description: ''
            }
        }
    }
    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(services => {
                    this.props.history.push("/admin/services/" + this.state.service.id)
                    this.setState({
                        services: services,
                        service: services.find((s) => s.id == this.state.service.id)
                    })
                }
            )
    }
    cancel = () =>
    this.props.history.push("/admin/services");

    selectService = function (id) {
    	if (id > 0) {
    		return this.serviceService
    			.findServiceById(id)
    			.then(service => {
                    this.props.history.push("/admin/services/" + id)
                    this.setState({
                        service: service
                    })
                }
            );
    	} else {
            this.props.history.push("/admin/services/new");
            this.setState({
            	service: {
                    title: 'Enter a title Here',
                    description: 'Enter a description Here'
                }
            });
            }
        };

        createService = () =>
            this.serviceService
                .createService(this.state.service);

        updateService = () =>
            this.serviceService
                .updateService(this.state.service)
                .then(this.props.history.push("/admin/services/"));

        deleteService = () =>
            this.serviceService
                .deleteService(this.state.service)
                .then(this.props.history.push("/admin/services/"));
    		
    		
    		
    		
    		
    render() {
        return(
            <div>
            <div>
                <h3>Service Details</h3>
                <select
                    value={this.state.service.id}
                    onChange={(e) => this.selectService(e.target.value)}
                    className="form-control">
                    {
                        this.state.services
                            .map(service =>
                                <option
                                    value={service.id}
                                    key={service.id}>
                                    {service.title}
                                </option>
                            )
                    }
                </select>
                <label>Service Title</label><br/>
                <input onChange={(e) =>
                this.setState({
                    service: {
                        id: this.state.service.id,
                        title: e.target.value,
                        description: this.state.service.description
                    }
                })} className="form-control"
                   value={this.state.service.title}/> 
                <label>Description</label>
                <input onChange={(e) =>
                    this.setState(
                        {
                            service: {
                                id: this.state.service.id,
                                title: this.state.service.title,
                                description: e.target.value
                            }
                        })} className="form-control"
                       value={this.state.service.description}/>
                	</div>
                	<div>
                	<button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                	<button className="btn btn-danger" onClick={
                		() => {this.deleteService().then(window.setTimeout(this.props.history.push("/admin/services/"), 500))}
                	}>Delete Service</button>
                	<button className="btn btn-primary" onClick={
                		() => {this.createService().then(window.setTimeout(this.props.history.push("/admin/services/"), 500))}
                	}>Add Service</button>
                	<button className="btn btn-success" onClick={
                		() => {this.updateService().then(window.setTimeout(this.props.history.push("/admin/services/"), 500))}
                	}>Update Service</button>
                </div>
                
                </div>
                
        )
    }
}

export default ServiceDetails
