import React from 'react'
import TestRenderer from 'react-test-renderer'
import serviceAnswers from '../mockdata/ServiceAnswer2.mock.json'
import ServiceAnswerDetailsContainer from '../../components/ServiceAnswerDetailsContainer'
import sleep from '../util/sleep'

test('ProviderSearch renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <serviceAnswers/>
    )
    const testRendererq2= TestRenderer.create(
        <ServiceAnswerDetailsContainer/>
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
    tree = testRendererq2.toJSON()
    expect(tree).toMatchSnapshot()

})
