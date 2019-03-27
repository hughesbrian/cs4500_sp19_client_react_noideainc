import React from 'react';
import Services from './Services';
import ServiceService from "../services/ServiceService";

class ServicesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
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

    saveService = function (service, updateService, createService) {
        if (service.id) {
            updateService(service);
        } else {
            createService(service);
        }
    };

    setEditingService = (new_attrs) =>
        this.setState(new_attrs);

    updateService = (service) =>
        this.userService
            .updateService(service)
            .then(this.props.history.push("/admin/services/"));

    deleteService = (service) =>
        this.userService
            .deleteService(service)
            .then(this.props.history.push("/admin/services/"));

    render = () => <Services services={this.state.services}
                          editingService={this.state.editingService}
                          setEditingService={this.setEditingService}
                          createService={this.createService}
                          updateService={this.updateService}
                          deleteService={this.deleteService}
                          saveService={this.saveService}/>;
}

export default ServicesContainer