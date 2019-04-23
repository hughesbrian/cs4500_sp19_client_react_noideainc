import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import TestRenderer from 'react-test-renderer'
import providers from '../mockdata/providers.mock.json'
import sortedProviders from '../mockdata/SearchProviders.mock.json.mock.json'
import ServiceSearchService from '../../services/ServiceSearchService'
const serviceSearchService = ServiceSearchService.getInstance()
let id = 123
let qidsstring = 1
let criteriastring = 2

test("search by name", () => {
    const findFilteredProviders = () => {
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        return providers[0]
    }

    const testRenderer = TestRenderer.create(
        <SearchBar
            name={providers[0].username}
            findFilteredProviders={findFilteredProviders}
        />
    )

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const searchButton =  testInstance.findByProps({
                                                       className: 'btn btn-primary search'
                                                   })

    searchButton.props.onClick()

})

test("search by zip", () => {
    const findFilteredProviders = () => {
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        return sortedProviders
    }

    const testRenderer = TestRenderer.create(
        <SearchBar
            zip={providers[1].businessAddress.zip}
            findFilteredProviders={findFilteredProviders}
        />
    )

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const searchButton =  testInstance.findByProps({
                                                       className: 'btn btn-primary search'
                                                   })

    searchButton.props.onClick()

})

test("render search results from service", () => {
    serviceSearchService
        .getResults(id, criteriastring, qidsstring)
        .then(providers => {
            const testRenderer = TestRenderer.create(
                <ServiceProviderList
                    serviceProviders={providers}/>
            )

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
        })
})