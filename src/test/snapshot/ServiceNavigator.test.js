import React from 'react'
import ServiceNavigator from '../../components/ServiceNavigator/ServiceNavigator'
import TestRenderer from 'react-test-renderer'
import ServiceCategoryService from '../../services/ServiceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import ServiceService from '../../services/ServiceService'
const serviceService = ServiceService.getInstance()
import '../mockservice/ServiceNavigator.mock'

test('render service navigator', () => {
    serviceCategoryService
        .findAllServiceCategories()
        .then(serviceCategories => {
            serviceService
                .findAllServices()
                .then(services => {
                    serviceCategories[0].services = [services[0]]
                    serviceCategories[1].services = [services[0]]
                    serviceCategories[2].services = []

                    const testRenderer = TestRenderer.create(
                        <ServiceNavigator serviceCategories={serviceCategories}/>
                    )

                    let tree = testRenderer.toJSON()
                    expect(tree).toMatchSnapshot()

                    const sideLinks = testInstance.findAllByProps({className: 'list-group-item no-border category-side-list'})
                    const sections = testInstance.findAllByProps({className: 'list-group-item no-border service-category-sections'})
                    const serviceCards = testInstance.findAllByProps({className: 'card-img-top service-card'})
                    const serviceLinks = testInstance.findAllByProps({className: 'col-6 list-group-item no-border service-links'})

                    expect(sideLinks.props.length).toBe(3)
                    expect(sections.props.length).toBe(3)
                    expect(serviceCards.props.length).toBe(2)
                    expect(serviceLinks.props.length).toBe(2)
                })
        })
})
