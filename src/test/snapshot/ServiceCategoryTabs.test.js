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
            let tree = testRenderer.toJSON();
            expect(tree).toMatchSnapshot()
});

test('a category tab is being clicked', () => {
    const updateScore = jest.fn((item) => {
        item.score = item.score + 1
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

    let tree = testRenderer.toJSON();
    const testInstance = testRenderer.root
    const updateScoreTabs =  testInstance.findByProps({
        id: 'nav-tab-tutoring'
    });

    updateScoreTabs.props.onClick();
    expect(updateScore).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
});

test('a service in a category tab is being clicked', () => {
    const updateScore = jest.fn((item) => {
        tabsMock[0].score =  item.score + 1;
        console.log("score updated for category")
    });

    const updateServiceScore = jest.fn((item) => {
        servicesMock[0].score = item.score + 1;
        console.log("score updated for service")
    });

    const testRenderer = TestRenderer.create(
        <ServiceCategoryTabs
            serviceCategories={tabsMock}
            updateServiceScore={updateServiceScore}
            handleTabClick={updateScore}
            services={servicesMock}
            activeCategory={tabsMock[0]}
        />
    )

    const testInstance = testRenderer.root
    const updateScoreTabs =  testInstance.findByProps({
        id: 'nav-tab-tutoring'
    });
    
    const tabsContent =  testInstance.findAllByProps({
        className: 'card-text'
    });

    let tree = testRenderer.toJSON();
    updateScoreTabs.props.onClick();
    expect(updateScore).toHaveBeenCalled();
    tabsContent[0].props.onClick();
    expect(updateServiceScore).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
});