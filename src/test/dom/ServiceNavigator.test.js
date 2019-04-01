import React from 'react'
import ServiceNavigatorContainer from '../../components/ServiceNavigator/ServiceNavigatorContainer'
import TestRenderer from 'react-test-renderer'
import sleep from '../util/sleep'
import '../mockservice/ServiceNavigator.mock'

test('ServiceNavigatorContainer renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <ServiceNavigatorContainer/>
    )
    await sleep(1000) // sleep to give the component a chance to render.

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})
