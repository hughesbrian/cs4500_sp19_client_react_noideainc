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

    test('filtering faqs', () => {

        const filterFAQs = () => {
            faqs = [
                {
                    "id":1,
                    "title":"background check",
                    "question":"How many projects do you experienced?",
                    "answers":[]
                },
                {
                    "id":2,
                    "title":"background check",
                    "question":"Have you passed a background check?",
                    "answers":[
                        {"id":1,"answer":"Yes","question":"Have you passed a background check?"},
                        {"id":2,"answer":"Yes","question":"Have you passed a background check?"},
                        {"id":6,"answer":"no","question":"Have you passed a background check?"}
                    ]
                }]
        }

        const testRenderer = TestRenderer.create(
            <FAQs title={title}
                question={question}
                faqs={faqs}
                filtered={false}
                filterFAQs={filterFAQs}
        />)

        const testInstance = testRenderer.root

        const searchBtn = testInstance.findAllByProps({className: 'buttons searchButton search-search btn btn-warning'})
        const clearBtn = testInstance.findAllByProps({className: 'buttons searchButton search-clear btn btn-warning'})
        expect(clearBtn.length).toBe(0)
        expect(searchBtn.length).toBe(1)
        searchBtn[0].props.onClick()
    })


    test('clear search for faqs', () => {

        const clearSearch = () => {
            faqs = faqData
        }

        const testRenderer = TestRenderer.create(
            <FAQs title={title}
                question={question}
                faqs={faqs}
                 filtered={true}
                clearSearch={clearSearch}
             />)

        const testInstance = testRenderer.root

        const searchBtn = testInstance.findAllByProps({className: 'buttons searchButton search-search btn btn-warning'})
        const clearBtn = testInstance.findAllByProps({className: 'buttons searchButton search-clear btn btn-warning'})
        expect(clearBtn.length).toBe(1)
        expect(searchBtn.length).toBe(0)
        clearBtn[0].props.onClick()
    })

