import React from 'react'
import ServiceAnswerDetailsContainer from '../../components/ServiceAnswerDetailsContainer'
import TestRenderer from 'react-test-renderer'
import serviceAnswers from '../MockData/ServiceAnswer.mock.json'
import sleep from '../util/sleep'
import '../mockservice/ServiceAnswerService.mock.js'
import serviceCategories from "../MockData/ServiceCategories.mock";

test('ServiceAnswerDetails renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <ServiceAnswerDetailsContainer/>
    )
    await sleep(1000) // sleep to give the component a chance to render.

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const select_answer = testInstance.findAllByProps({className: 'select-answer'})
    console.log(select_answer[0].props)
    await sleep(500) // sleep to give the component a chance to render.
    select_answer[0].props.onChange({target:{value: 1}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const select_question = testInstance.findByProps({className: 'select-question'})
    console.log(select_question.props)
    await sleep(500) // sleep to give the component a chance to render.
    select_question.props.onChange({target: {value: 1}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    /*const updateBtn = testInstance.findByProps({className: 'btn btn-success update-btn'})
    await sleep(500) // sleep to give the component a chance to render.
    updateBtn.props.onClick()
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    await sleep(500) // sleep to give the component a chance to render.
    titleField.props.onChange({target: {value: "Creation"}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const createBtn = testInstance.findByProps({className: 'btn btn-primary create-btn'})
    await sleep(500) // sleep to give the component a chance to render.
    createBtn.props.onClick()
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const deleteBtns = testInstance.findAllByProps({className: 'btn btn-danger delete-btn'})
    await sleep(500) // sleep to give the component a chance to render.
    const last = deleteBtns.length - 1
    deleteBtns[last].props.onClick(serviceCategories[last].id)
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()*/

})
