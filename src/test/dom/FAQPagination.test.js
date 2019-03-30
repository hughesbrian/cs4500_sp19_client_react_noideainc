import React from 'react'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import FAQService from '../../services/FAQService'
import faqMockAll from '../MockData/FAQAll.mock.json';
import faqMockPage1 from '../MockData/FAQPage1.mock.json';
import faqMockPage2 from '../MockData/FAQPage2.mock.json';
const faqService = FAQService.getInstance();

test('total number of faqs renders correctly', () => {
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockAll}/>
)
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    const testInstance   = testRenderer.root;
    const faqList = testInstance.findAllByProps({ className : 'faq-row'});
    expect(faqList.length).toBe(14);

});

test('initial pagination renders correctly', () => {
    const tempHandlePage = jest.fn();
    const tempHandleCount = jest.fn();

    const testRenderer = TestRenderer.create(
        <FAQs
            faqs={faqMockPage1}
            currentPage={0}
            totalPages={2}
            totalFaqs={14}
            handlePageClick={tempHandlePage}
            changeCountPerPage={tempHandleCount}
            />)

    const testInstance = testRenderer.root
    const faqsRows = testInstance.findAllByProps({className: 'faq-row'})
    const pageNums = testInstance.findAllByProps({className: 'page-link page-num'})
    const nextBtn = testInstance.findAllByProps({className: 'page-link next-btn'})
    const prevBtn = testInstance.findAllByProps({className: 'page-link prev-btn'})
    const prevBtnDisabled = testInstance.findAllByProps({className: 'page-link prev-btn-disabled'})
    const countDropdown = testInstance.findAllByProps({className: 'form-control count-dropdown'})
    const countOptions = testInstance.findAllByProps({className: 'count-option'})

    expect(faqsRows.length).toBe(10)
    expect(pageNums.length).toBe(2)
    expect(nextBtn.length).toBe(1)
    // previous button grayed out
    expect(prevBtn.length).toBe(0)
    expect(prevBtnDisabled.length).toBe(1)
    expect(countDropdown.length).toBe(1)
    expect(countOptions[0].props.value).toBe(10)
    expect(countOptions.length).toBe(2)
})

test('second page pagination renders correctly', () => {
    const tempHandlePage = jest.fn();
    const tempHandleCount = jest.fn();

    const testRenderer = TestRenderer.create(
        <FAQs
    faqs={faqMockPage2}
    currentPage={1}
    totalPages={2}
    totalFaqs={14}
    handlePageClick={tempHandlePage}
    changeCountPerPage={tempHandleCount}
    />)

    const testInstance = testRenderer.root
    const faqsRows = testInstance.findAllByProps({className: 'faq-row'})
    const pageNums = testInstance.findAllByProps({className: 'page-link page-num'})
    const nextBtn = testInstance.findAllByProps({className: 'page-link next-btn'})
    const nextBtnDisabled = testInstance.findAllByProps({className: 'page-link next-btn-disabled'})
    const prevBtn = testInstance.findAllByProps({className: 'page-link prev-btn'})
    const countDropdown = testInstance.findAllByProps({className: 'form-control count-dropdown'})
    const countOptions = testInstance.findAllByProps({className: 'count-option'})

    expect(faqsRows.length).toBe(4)
    expect(pageNums.length).toBe(2)
    // next button grayed out
    expect(nextBtn.length).toBe(0)
    expect(nextBtnDisabled.length).toBe(1)
    expect(prevBtn.length).toBe(1)
    expect(countDropdown.length).toBe(1)
    expect(countOptions[0].props.value).toBe(10)
    expect(countOptions.length).toBe(2)
})

test('the next button is being clicked', () => {
    const tempHandlePage = jest.fn();
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage1}
            currentPage={0}
            totalPages={2}
            totalFaqs={14}
            handlePageClick={tempHandlePage}/>);

    const testInstance   = testRenderer.root;
    const nextButton = testInstance.findByProps({ className: 'page-link next-btn' });
    nextButton.props.onClick();
    expect(tempHandlePage).toHaveBeenCalled();
});

test('prev button is being clicked', () => {
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

test('select count option reflects a change in number of faqs in a page', () => {
    const tempHandleCount = jest.fn();
    const testRenderer = TestRenderer.create(
        <FAQs faqs={faqMockPage1}
            currentPage={0}
            totalPages={2}
            totalFaqs={14}
            countPerPage={10}
            changeCountPerPage={tempHandleCount} />)

        const testInstance = testRenderer.root;
        const countAllSelection = testInstance.findByProps({ className: 'form-control count-dropdown' });
        countAllSelection.props.onChange()
        expect(tempHandleCount).toHaveBeenCalled();
})

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

            const testInstance = testRenderer.root

            const nextBtn = testInstance.findAllByProps({className: 'page-link next-btn'})
            const prevBtn = testInstance.findAllByProps({className: 'page-link prev-btn'})
            const faqRows = testInstance.findAllByProps({className: 'faq-row'})
            const countDropdown = testInstance.findAllByProps({className: 'count-dropdown'})
            const pageNums = testInstance.findAllByProps({className: 'page-num'})
            const countOptions = testInstance.findAllByProps({className: 'count-option'})

            expect(nextBtn.length).toBe(1)
            expect(prevBtn.length).toBe(1)
            expect(faqRows.length).toBe(10)
            expect(countDropdown.length).toBe(1)
            expect(pageNums.length).toBe(2)
            expect(countOptions.length).toBe(2)
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

            const testInstance = testRenderer.root

            const nextBtn = testInstance.findAllByProps({className: 'page-link next-btn'})
            const prevBtn = testInstance.findAllByProps({className: 'page-link prev-btn'})
            const faqRows = testInstance.findAllByProps({className: 'faq-row'})
            const countDropdown = testInstance.findAllByProps({className: 'count-dropdown'})
            const pageNums = testInstance.findAllByProps({className: 'page-num'})
            const countOptions = testInstance.findAllByProps({className: 'count-option'})

            expect(nextBtn.length).toBe(1)
            expect(prevBtn.length).toBe(1)
            expect(faqRows.length).toBe(2)
            expect(countDropdown.length).toBe(1)
            expect(pageNums.length).toBe(2)
            expect(countOptions.length).toBe(2)
        })
})






