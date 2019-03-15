export default class ServiceCategoryService {
    static instance = null;
    static getInstance() {
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }

    findServiceCategoryById = categoryId =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories/${categoryId}`)
            .then(response => response.json())

    findAllServiceCategories = () =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories`)
            .then(response => response.json())

    pagedServiceCategories = (page, count) =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories/paged?page=${page}&count=${count}`)
            .then(response => response.json())

    createServiceCategory = sc => {
        delete sc.id;
        return fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories`, {
            method: 'post',
            body: JSON.stringify(sc),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    updateServiceCategory = sc =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories/${sc.id}`, {
            method: 'put',
            body: JSON.stringify(sc),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

    deleteServiceCategory = id =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/categories/${id}`, {
            method: 'delete'
        })
}
