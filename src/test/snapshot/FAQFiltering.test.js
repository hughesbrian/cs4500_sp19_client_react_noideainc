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

            let tree = testRenderer.toJSON();
            expect(tree).toMatchSnapshot()

        }

        const testRenderer = TestRenderer.create(
            <FAQs title={title}
                question={question}
                faqs={faqs}
                filtered={false}
                filterFAQs={filterFAQs}
        />)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const searchBtn = testInstance.findAllByProps({className: 'buttons searchButton search-search btn btn-warning'})
        searchBtn[0].props.onClick()
    })


    test('clear search for faqs', () => {

        const clearSearch = () => {
            faqs = faqData

            let tree = testRenderer.toJSON();
            expect(tree).toMatchSnapshot()

    }

    const testRenderer = TestRenderer.create(
        <FAQs title={title}
              question={question}
              faqs={faqs}
              filtered={true}
              clearSearch={clearSearch}
        />)

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const clearBtn = testInstance.findAllByProps({className: 'buttons searchButton search-clear btn btn-warning'})
    clearBtn[0].props.onClick()
})

