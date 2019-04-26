import React from 'react'
import ServiceCategoryTabsContainer from '../../components/ServiceCategoryTabs/ServiceCategoryTabsContainer'
import ServiceCategoryTabs from '../../components/ServiceCategoryTabs/ServiceCategoryTabs'
import TestRenderer from 'react-test-renderer';
import ServiceCategoryService from '../../services/ServiceCategoryService'
import tabsMock from '../MockData/ServiceCategoryTabs.mock.json';
import servicesMock from '../MockData/ServicesForTabs.mock.json';

const categoryService = ServiceCategoryService.getInstance();

test('Service category tabs render correctly', () => {
    const testRenderer = TestRenderer.create(
        <ServiceCategoryTabsContainer
    service={categoryService}/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
});

test('a category tab is being clicked', () => {
    const updateScore = jest.fn((item) => {
        tabsMock[0] =  item.score + 1;
        console.log("score updated")
    });

    const testRenderer = TestRenderer.create(
        <ServiceCategoryTabs
            serviceCategories={tabsMock}
            handleTabClick={updateScore}
            services={servicesMock}
            activeCategory={tabsMock[0]}
        />
    )

    const testInstance = testRenderer.root
    const updateScoreTabs =  testInstance.findByProps({
        id: 'nav-tab-tutoring'
    })

    updateScoreTabs.props.onClick()
    expect(updateScore).toHaveBeenCalled();
})

test('a service in a category tab is being clicked', () => {
    const updateScore = jest.fn((item) => {
        tabsMock[0] =  item.score + 1;
        console.log("score updated for category")
    });

    const updateServiceScore = jest.fn((item) => {
        servicesMock[1] = item.score + 1;
        console.log("score updated for service")
    });

    const testRenderer = TestRenderer.create(
        <ServiceCategoryTabs
            serviceCategories={tabsMock}
            handleTabClick={updateScore}
            services={servicesMock}
            updateServiceScore={updateServiceScore}
            activeCategory={tabsMock[0]}
        />
    )

    const testInstance = testRenderer.root
    const updateScoreTabs =  testInstance.findByProps({
        id: 'nav-tab-tutoring'
    })

    const services =  testInstance.findAllByProps({
        className: 'card-text'
    })

    updateScoreTabs.props.onClick();
    expect(updateScore).toHaveBeenCalled();
    services[0].props.onClick();
    expect(updateServiceScore).toHaveBeenCalled();
})