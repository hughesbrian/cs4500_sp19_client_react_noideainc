import React from 'react'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import faqs from '../MockData/FAQ.mock.json'
import FAQService from '../../services/FAQService'
const faqService = FAQService.getInstance()
import '../mockservice/FAQService.mock'


test('faq list renders correctly', () => {
    let selectFaq = {
        title: "background check test",
        question: "How many projects do you experienced? test"
    }

    let newFAQ = {
        "id":4,
        "title":"background check",
        "question":"How many projects do you experienced?",
        "answers":[]
    }

    const createFAQ = () => {
        faqs.push(newFAQ)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()
    }

    const testRenderer = TestRenderer.create(
        <FAQs
            title={selectFaq.title}
            question={selectFaq.question}
            faqs={faqs}
            createFAQ={createFAQ}
        />
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const faqTitle  = testInstance.findByProps({className: 'faqTitle'})
    const faqQuestion  = testInstance.findByProps({className: 'faqQuestion'})
    const createFAQBtn = testInstance.findAllByProps({className: 'buttons create-btn btn btn-primary'})
    const updateFAQBtn = testInstance.findAllByProps({className: 'buttons edit-btn btn btn-info'})
    const faqRows = testInstance.findAllByProps({className: 'faq-row'})
    const faqTitles = testInstance.findAllByProps({className: 'faq-title'})
    const faqQuestions = testInstance.findAllByProps({className: 'faq-question'})
    const deleteFAQBtns = testInstance.findAllByProps({className: 'buttons delete-btn btn btn-danger'})
    const selectFAQBtns = testInstance.findAllByProps({className: 'buttons select-btn btn btn-primary'})

    expect(faqTitle.props.value).toBe('background check test')
    expect(faqQuestion.props.value).toBe('How many projects do you experienced? test')
    expect(createFAQBtn.length).toBe(1)
    expect(updateFAQBtn.length).toBe(1)

    expect(faqRows.length).toBe(8)
    expect(faqTitles.length).toBe(8)
    expect(faqQuestions.length).toBe(8)
    expect(deleteFAQBtns.length).toBe(8)
    expect(selectFAQBtns.length).toBe(8)

    // test the create event
    expect(faqs.length).toBe(8); // before create
    createFAQBtn[0].props.onClick();
    // after create, when button is clicked, that function actually is triggered 
    // and add a new element in the faqs array
    expect(faqs.length).toBe(9); 
})

test("render all faqs from services", () => {
    faqService
    .findAllFAQs()
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

        const testInstance = testRenderer.root

        const faqTitle  = testInstance.findByProps({className: 'faqTitle'})
        const faqQuestion  = testInstance.findByProps({className: 'faqQuestion'})
        const createFAQBtn = testInstance.findAllByProps({className: 'buttons create-btn btn btn-primary'})
        const updateFAQBtn = testInstance.findAllByProps({className: 'buttons edit-btn btn btn-info'})
        const faqRows = testInstance.findAllByProps({className: 'faq-row'})
        const faqTitles = testInstance.findAllByProps({className: 'faq-title'})
        const faqQuestions = testInstance.findAllByProps({className: 'faq-question'})
        const deleteFAQBtns = testInstance.findAllByProps({className: 'buttons delete-btn btn btn-danger'})
        const selectFAQBtns = testInstance.findAllByProps({className: 'buttons select-btn btn btn-primary'})
        
        expect(faqTitle.props.value).toBe('background check')
        expect(faqQuestion.props.value).toBe('How many projects do you experienced?')
        expect(createFAQBtn.length).toBe(1)
        expect(updateFAQBtn.length).toBe(1)
        // we added a new element in the faq array in the test "faq list renders correctly"
        expect(faqRows.length).toBe(9)
        expect(faqTitles.length).toBe(9)
        expect(faqQuestions.length).toBe(9)
        expect(deleteFAQBtns.length).toBe(9)
        expect(selectFAQBtns.length).toBe(9)

    }).catch(function (error) {
        // print out which test fail
        console.log(error)
        alert("Failed to test service");
    });
})