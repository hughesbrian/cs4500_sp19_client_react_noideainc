import React from 'react'
import FAQs from '../../components/FAQs'
import TestRenderer from 'react-test-renderer'
import faqData from '../MockData/FAQ.mock.json'
import FAQService from '../../services/FAQService'

var faqs = faqData
const faqService = FAQService.getInstance()
let title = 'check'
let question = 'you'

    test('render filtered list for faqs from service', () => {
        faqService
            .findFiltered(title, question)
            .then(faqData => {
                const testRenderer = TestRenderer.create(
                    <FAQs title={title}
                          question={question}
                          faqs={faqData}
                    />)

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })

    test('render filtered list for faqs and the correct button', () => {
            const testRenderer = TestRenderer.create(
                <FAQs title={title}
                      question={question}
                      faqs={faqData} 
                      filtered={false}
                />)

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
    })

