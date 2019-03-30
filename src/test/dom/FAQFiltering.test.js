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

            const testInstance = testRenderer.root

            const titleField = testInstance.findByProps({className: 'faqTitle'})
            const questionField = testInstance.findByProps({className: 'faqQuestion'})
            const faqsRows = testInstance.findAllByProps({className: 'faq-row'})
            const searchBtn = testInstance.findAllByProps({className: 'buttons searchButton search-search btn btn-warning'})
            const clearBtn = testInstance.findAllByProps({className: 'buttons searchButton search-clear btn btn-warning'})

            try {
                expect(titleField.props.length).toBe(1)
                expect(titleField.props.value).toBe('check')
                expect(questionField.props.value).toBe('you')
                expect(questionField.props.length).toBe(1)
                expect(faqsRows.props.length).toBe(3)
                expect(searchBtn.props.length).toBe(1)
                expect(clearBtn.props.length).toBe(1)
            } catch(e) {
                console.log(e)
            }

        })
    })

    test('render filtered list for faqs and the correct button', () => {
        const testRenderer = TestRenderer.create(
            <FAQs title={title}
                  question={question}
                  faqs={faqData} 
                  filtered={false}
            />)

        const testInstance = testRenderer.root

        const titleField = testInstance.findByProps({className: 'faqTitle'})
        const questionField = testInstance.findByProps({className: 'faqQuestion'})
        const faqsRows = testInstance.findAllByProps({className: 'faq-row'})
        const searchBtn = testInstance.findAllByProps({className: 'buttons searchButton search-search btn btn-warning'})
        const clearBtn = testInstance.findAllByProps({className: 'buttons searchButton search-clear btn btn-warning'})

        expect(titleField.props.value).toBe('check')
        expect(questionField.props.value).toBe('you')
        expect(faqsRows.length).toBe(8)
        expect(clearBtn.length).toBe(0)
        expect(searchBtn.length).toBe(1)
})

