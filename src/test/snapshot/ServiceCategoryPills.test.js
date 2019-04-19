import React from 'react'
import ServiceCategoryPills from '../../components/ServiceCategoryPills/ServiceCategoryPills'
import TestRenderer from 'react-test-renderer'
import serviceCategories from '../MockData/ServiceCategories2.mock.json'
import ServiceCategoryService from '../../services/ServiceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import '../mockservice/ServiceCategoryService.mock'

test("update score for one serviceCategory", () => {
    const updateScore = (item) => {
        serviceCategories[0] =  item.score + 1;

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const testRenderer = TestRenderer.create(
        <ServiceCategoryPills 
            serviceCategories={serviceCategories}
            updateScore={updateScore}
        />
    )

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const updateScoreButtons =  testInstance.findAllByProps({
        className: 'nav-item'
    })

    updateScoreButtons[1].props.onClick()

})

test("render serviceCategroy in ServiceCategoryPills correctly", () => {
    const testRenderer = TestRenderer.create(
        <ServiceCategoryPills 
            serviceCategories={serviceCategories}
        />
    )

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const ServiceCategories = testInstance.findAllByProps({
        className: 'nav-item'
    })

    expect(ServiceCategories.length).toBe(8)
})

test("render serviceCategroy in ServiceCategoryPills from service", () => {
    serviceCategoryService
        .findAllServiceCategories()
        .then(serviceCategories => {
            const testRenderer = TestRenderer.create(
                <ServiceCategoryPills 
                    serviceCategories={serviceCategories}
                />
            )

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root

            const ServiceCategories = testInstance.findAllByProps({
                className: 'nav-item'
            })

            expect(ServiceCategories.length).toBe(5)
    })
})


