import React from 'react'
import TestRenderer from 'react-test-renderer'
import serviceAnswers from '../MockData/ServiceAnswer.mock.json'
import sleep from '../util/sleep'
import '../mockservice/ServiceAnswerService.mock.js'
import serviceCategories from "../MockData/ServiceCategories.mock";

test('ServiceAnswerSummary renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <serviceAnswers/>
    )
    await sleep(1000) // sleep to give the component a chance to render.

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const select_answer = testInstance.findAllByProps({className: 'select-answer'})
    await sleep(500) // sleep to give the component a chance to render.
    select_answer[0].props.onChange({target:{value: 1}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const select_question = testInstance.findByProps({className: 'select-question'})
    await sleep(500) // sleep to give the component a chance to render.
    select_question.props.onChange({target: {value: 1}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

})
