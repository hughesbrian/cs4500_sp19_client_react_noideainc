import React from 'react';
import ServiceDetails from './ServiceDetails'
import ServiceService from "../services/ServiceService";

class ServiceDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
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
                    this.props.history.push("/admin/services/" + services[0].id);
                    this.setState({
                        services: services,
                        service: services[0]
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
                    this.props.history.push("/admin/services/" + id);
                    this.setState({
                        service: service
                    })
                });
        } else {
            this.props.history.push("/admin/services/new");
            this.setState({
                service: {
                    title: 'Enter a Title Here',
                    description: 'Enter a Description Here'
                }
            });
        }
    };

    setService = (new_attrs) => this.setState(new_attrs);

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

    redirect = (path) =>
        this.props.history.push(path);

    render = () => <ServiceDetails services={this.state.services}
                                service={this.state.service}
                                cancel={this.cancel}
                                setService={this.setService}
                                selectService={this.selectService}
                                createService={this.createService}
                                updateService={this.updateService}
                                deleteService={this.deleteService}
                                redirect={this.redirect}/>;
}

export default ServiceDetailsContainer