import React from 'react'
import FAQContainer from '../../components/FAQContainer'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import FAQService from '../../services/FAQService'
import faqMockAll from '../MockData/FAQAll.mock.json';
import faqMockPage1 from '../MockData/FAQPage1.mock.json';
import faqMockPage2 from '../MockData/FAQPage2.mock.json';
const faqService = FAQService.getInstance();

test('[FAQContainer renders correctly]', () => {
    const testRenderer = TestRenderer.create(
        <FAQContainer
    service={faqService}/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
});

test('[test correct total number of faqs]', () => {
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockAll}/>
)
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    const testInstance   = testRenderer.root;
    const faqList = testInstance.findAllByProps({ className : 'faq-row'});
    expect(faqList.length).toBe(14);

});

test('test if function in the next button is being called', () => {
    // const tempHandlePage = jest.fn((direction) => {
    //     console.log('clicked!')
    //     console.log(direction)
    //     expect(direction).toBe('next')
    // });
    const tempHandlePage = jest.fn();
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage1}
            currentPage={0}
            totalPages={2}
            totalFaqs={14}
            handlePageClick={tempHandlePage}/>);

    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    const testInstance   = testRenderer.root;
    const nextButton = testInstance.findByProps({ className: 'page-link next-btn' });
    nextButton.props.onClick();
    expect(tempHandlePage).toHaveBeenCalled();
});

test('test if prev button is being clicked', () => {
    const tempHandlePage = jest.fn();
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage2}
            currentPage={1}
            totalPages={2}
            totalFaqs={14}
            handlePageClick={tempHandlePage}/>);

    const testInstance   = testRenderer.root;
    const prevButton = testInstance.findByProps({ className: 'page-link prev-btn' });
    prevButton.props.onClick();
    expect(tempHandlePage).toHaveBeenCalled();
});

test('test if page number is being clicked', () => {
    const tempHandlePage = jest.fn();
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage1}
                currentPage={0}
                totalPages={2}
                totalFaqs={14}
                handlePageClick={tempHandlePage}/>);
    const testInstance   = testRenderer.root;
    const pageTwoButton = testInstance.findByProps({ id: 1 });
    pageTwoButton.props.onClick();
    expect(tempHandlePage).toHaveBeenCalled();
})







