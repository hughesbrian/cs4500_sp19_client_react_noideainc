import React from 'react'
import Services from '../../components/Services'
import TestRenderer from 'react-test-renderer'
import services from '../mockdata/Services.mock'
import ServiceService from '../../services/ServiceService'
import '../mockservice/ServiceService.mock'
import ServicesContainer from "../../components/ServicesContainer";

const serviceService = ServiceService.getInstance();

test('Create and Delete Services', () => {
    let clean3 = {id: 779, title: "cleaning3", description: "no3cleaningService"};

    const saveService = () => {
        services.push(clean3);

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const deleteService = serviceId => {
        services.splice(0, 1)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const testRenderer = TestRenderer.create(
        <Services services={services}
                  editingService={clean3}
                  deleteService={deleteService}
                  saveService={saveService}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const createServiceBtn = testInstance.findByProps({className: 'btn btn-success save-service-btn'});
    createServiceBtn.props.onClick();

    const deleteServiceBtns = testInstance.findAllByProps({className: 'btn btn-danger delete-service-btn'});
    deleteServiceBtns[1].props.onClick();
});

test('List of Services Renders Directly', () => {
    const testRenderer = TestRenderer.create(
        <Services services={services} editingService={services[0]}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const servicenameField = testInstance.findByProps({className: 'form-control title-edit-field'});
    const numServices = testInstance.findAllByProps({className: 'btn btn-danger delete-service-btn'});

    expect(servicenameField.props.value).toBe('cleaning2');
    expect(numServices.length).toBe(services.length);
});

test('List of Services Renders from Service', () => {
    serviceService.findAllServices().then(services => {
        const testRenderer = TestRenderer.create(
            <Services services={services} editingService={services[0]}/>
        );

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        const testInstance = testRenderer.root;

        const servicenameField = testInstance.findByProps({className: 'form-control title-edit-field'});
        const numServices = testInstance.findAllByProps({className: 'btn btn-danger delete-service-btn'});

        expect(servicenameField.props.value).toBe('cleaning1');
        expect(numServices.length).toBe(services.length);
    });
});
