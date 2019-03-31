import React from 'react'
import FAQContainer from '../../components/FAQContainer'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import FAQService from '../../services/FAQService'
import faqMockAll from '../MockData/FAQAll.mock.json';
import faqMockPage1 from '../MockData/FAQPage1.mock.json';
import faqMockPage2 from '../MockData/FAQPage2.mock.json';
const faqService = FAQService.getInstance();

test('FAQContainer renders correctly', () => {
    const testRenderer = TestRenderer.create(
        <FAQContainer
    service={faqService}/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
});

test('render all faqs in page 1 from service', () => {
    faqService
    .findPagedFAQs(0, 10)
    .then(faqs => {
        const testRenderer = TestRenderer.create(
            <FAQs
                title={faqs[0].title}
                question={faqs[0].question}
                faqs={faqs}
            />
        )
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    })
});

test('render pagination and faqs on the first page correctly from services', () => {
    faqService
        .findPagedFAQs(0, 10)
        .then(faqss => {
            const testRenderer = TestRenderer.create(
                <FAQs
                    title={faqss[0].title}
                    question={faqss[0].question}
                    faqs={faqss}
                    currentPage={0}
                    totalPages={2}
                    totalFaqs={12}
                    />)
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })

test('render pagination and faqs on the second page correctly from services', () => {
    faqService
        .findPagedFAQs(1, 2)
        .then(faqss => {
            const testRenderer = TestRenderer.create(
                <FAQs
                    title={faqss[0].title}
                    question={faqss[0].question}
                    faqs={faqss}
                    currentPage={1}
                    totalPages={2}
                    totalFaqs={12}/>)
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })

test('page number is being clicked', () => {
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

test('count option reflects number of faqs in a page', () => {
    const changeCount = () => {
        faqMockPage1.map(faq => {
            faqMockAll.push(faq)
        })

        faqMockPage2.map(faq => {
            faqMockAll.push(faq)
        })

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()
    }

    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage1}
            currentPage={0}
            totalPages={2}
            totalFaqs={14}
            countPerPage={10}
            changeCountPerPage={changeCount} />)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        const testInstance = testRenderer.root;
        const countAllSelection = testInstance.findByProps({ className: 'form-control count-dropdown' });
        countAllSelection.props.onChange()
})