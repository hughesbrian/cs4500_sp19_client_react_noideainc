import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import TestRenderer from 'react-test-renderer'
import usersMock from '../MockData/UpdatedUsers.mock.json'
import sleep from '../util/sleep'

test('UsersContainer renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <UsersContainer/>
    )
    await sleep(1000) // sleep to give the component a chance to render.

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const selectBtns = testInstance.findAllByProps({className: 'btn btn-primary select-btn'})
    await sleep(500) // sleep to give the component a chance to render.
    selectBtns[0].props.onClick()
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
    

    const updateBtn = testInstance.findByProps({className: 'btn btn-success update-btn'})
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
    deleteBtns[last].props.onClick(usersMock[last].id)
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})
