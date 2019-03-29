import React from 'react'
import ServiceAnswerDetails from '../../components/ServiceAnswerDetails'
import TestRenderer from 'react-test-renderer'
import ServiceAnswers from '../mockdata/ServiceAnswer.mock.json'
import ServiceQuestions from '../mockdata/ServiceQuestion.mock.json'
import serviceAnswerService from '../../services/ServiceAnswerService'
const ServiceAnswerService = serviceAnswerService.getInstance()
import '../mockservice/ServiceAnswerService.mock.js'

test('create, delete, and update service categories', () => {
    const createServiceAnswer = () => {
        ServiceAnswers.push({
            choiceAnswer: 5,
            id: ServiceAnswers.length+1,
            trueFalseAnswer: '',
            minRangeAnswer: '',
            maxRangeAnswer: ''
        })

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const deleteServiceAnswer = id => {
        ServiceAnswers.splice(0, 1)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const updateServiceAnswer = () => {
        ServiceAnswers[0] = {"id": ServiceAnswers[0].id, "title": "new title"}

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const testRenderer = TestRenderer.create(
        <ServiceAnswerDetails serviceAnswers = {ServiceAnswers}
                              answer = {ServiceAnswers[0]}
                              createAnswer = {ServiceAnswers[1]}
                              serviceQuestion = {ServiceQuestions[0]}
                              serviceQuestions = {ServiceQuestions}
                              findAllServiceAnswer = {null}
                              selectServiceAnswer = {null}
                              updateMinValue = {null}
                              updateChoiceAnswer = {null}
                              updateMaxValue = {null}
                              updateTrueFalse = {null}
                              updateNewMinValue = {null}
                              updateNewChoiceAnswer = {null}
                              updateNewMaxValue = {null}
                              updateNewTrueFalse = {null}
                              selectServiceQuestion = {null}
                              createServiceAnswer = {createServiceAnswer}
                              deleteServiceAnswer = {deleteServiceAnswer}
                              updateServiceAnswer = {updateServiceAnswer} />)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

})

test('render list for service categories', () => {
    ServiceAnswerService
        .findAllServiceAnswers()
        .then(ServiceAnswers => {
            const testRenderer = TestRenderer.create(
                <ServiceAnswerDetails serviceAnswers = {ServiceAnswers}
                                      answer = {ServiceAnswers[0]}
                                      createAnswer = {ServiceAnswers[1]}
                                      serviceQuestion = {ServiceQuestions[0]}
                                      serviceQuestions = {ServiceQuestions}
                                      findAllServiceAnswer = {null}
                                      selectServiceAnswer = {null}
                                      updateMinValue = {null}
                                      updateChoiceAnswer = {null}
                                      updateMaxValue = {null}
                                      updateTrueFalse = {null}
                                      updateNewMinValue = {null}
                                      updateNewChoiceAnswer = {null}
                                      updateNewMaxValue = {null}
                                      updateNewTrueFalse = {null}
                                      selectServiceQuestion = {null}
                                      createServiceAnswer = {null}
                                      deleteServiceAnswer = {null}
                                      updateServiceAnswer = {null} />)

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root


            const serviceAnswerRows = testInstance.findAllByProps({className: 'select-answer'})
            const serviceQuestionRow = testInstance.findAllByProps({className: 'select-question'})

            expect(serviceAnswerRows.length).toBe(1)
            expect(serviceQuestionRow.length).toBe(1)
        })
})
