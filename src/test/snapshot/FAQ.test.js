import React from 'react'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer';
import faqs from '../MockData/FAQ.mock.json'
import FAQService from '../../services/FAQService'
const faqService = FAQService.getInstance()
import '../mockservice/FAQService.mock'

test('create and delete faqs', () => {
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

    const deleteFAQ = () => {
        faqs.splice(0, 1)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()

    }

    const testRenderer = TestRenderer.create(
        <FAQs
            title={"background check"}
            question={"How many projects do you experienced?"}
            faqs={faqs}
            createFAQ={createFAQ}
            deleteFAQ={deleteFAQ}
        />
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    
    const createFAQBtn = testInstance.findByProps({className: 'buttons create-btn btn btn-primary'});
    createFAQBtn.props.onClick();

    const deleteFAQBtns = testInstance.findAllByProps({className: 'buttons delete-btn btn btn-danger'});
    deleteFAQBtns[0].props.onClick();
})
