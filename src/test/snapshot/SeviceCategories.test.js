import React from 'react'
import ServiceCategories from '../../components/ServiceCategories'
import TestRenderer from 'react-test-renderer'
import serviceCategories from '../MockData/ServiceCategories.mock.json'
import ServiceCategoryService from '../../services/ServiceCategoryService'
const serviceCategoryService = ServiceCategoryService.getInstance()
import '../mockservice/ServiceCategoryService.mock'

test('create, delete, and update service categories', () => {
    const createServiceCategory = () => {
        serviceCategories.push({
            id: serviceCategories.length + 1,
            title: "title-" + serviceCategories.length + 1
        })

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const deleteServiceCategory = id => {
        serviceCategories.splice(0, 1)

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const updateServiceCategory = () => {
        serviceCategories[0] = {"id": serviceCategories[0].id, "title": "new title"}

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    }

    const testRenderer = TestRenderer.create(
        <ServiceCategories page={0}
                           count={serviceCategories.length}
                           totalPages={1}
                           serviceCategories={serviceCategories}
                           serviceCategory={serviceCategories[0]}
                           updateForm={() => null}
                           createServiceCategory={createServiceCategory}
                           deleteServiceCategory={deleteServiceCategory}
                           selectServiceCategory={() => null}
                           updateServiceCategory={updateServiceCategory}
                           setPageSelect={() => null}
                           setPagePagination={() => null}/>)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const createBtn = testInstance.findByProps({className: 'btn btn-primary create-btn'})
    createBtn.props.onClick()

    const deleteBtns = testInstance.findAllByProps({className: 'btn btn-danger delete-btn'})
    deleteBtns[2].props.onClick()

    const updateBtn = testInstance.findByProps({className: 'btn btn-success update-btn'})
    updateBtn.props.onClick()
})

test('render list for service categories', () => {
    serviceCategoryService
        .findAllServiceCategories()
        .then(serviceCategories => {
            const testRenderer = TestRenderer.create(
                <ServiceCategories page={0}
                                   count={serviceCategories.length}
                                   totalPages={1}
                                   serviceCategories={serviceCategories}
                                   serviceCategory={serviceCategory[1]}
                                   updateForm={() => null}
                                   createServiceCategory={() => null}
                                   deleteServiceCategory={() => null}
                                   selectServiceCategory={() => null}
                                   updateServiceCategory={() => null}
                                   setPageSelect={() => null}
                                   setPagePagination={() => null}/>)

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const serviceCategoriesRows = testInstance.findAllByProps({className: 'service-category-rows'})
            const selectBtns = testInstance.findAllByProps({className: 'btn btn-primary select-btn'})
            const createBtn = testInstance.findByProps({className: 'btn btn-primary create-btn'})
            const updateBtn = testInstance.findByProps({className: 'btn btn-success update-btn'})
            const deleteBtns = testInstance.findAllByProps({className: 'btn btn-danger delete-btn'})
            const previousBtn = testInstance.findByProps({className: 'page-link previous-btn'})
            const nextBtn = testInstance.findByProps({className: 'page-link next-btn'})
            const paginationBtns = testInstance.findAllByProps({className: 'page-link pagination-btns'})
            const titleField = testInstance.findByProps({className: 'title-field'})
            const pageSelectFields = testInstance.findByProps({className: 'page-select-fields'})

            expect(serviceCategoriesRows.props.length).toBe(3)
            expect(selectBtns.props.length).toBe(3)
            expect(createBtn.props.length).toBe(1)
            expect(updateBtn.props.length).toBe(1)
            expect(deleteBtns.props.length).toBe(3)
            expect(previousBtn.props.length).toBe(1)
            expect(nextBtn.props.length).toBe(1)
            expect(paginationBtns.props.length).toBe(1)
            expect(titleField.props.value).toBe("Fitness Trainer")
            expect(pageSelectFields.props.length).toBe(1)
        })
})
