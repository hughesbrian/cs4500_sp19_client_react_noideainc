const baseURL = "https://cs4500-sp19-noideainc.herokuapp.com";
//const baseURL = "http://localhost:8080";

export default class ServiceCategoryService {
    static instance = null;
    static getInstance() {
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }

    findServiceCategoryById = categoryId =>
        fetch(baseURL + `/api/categories/${categoryId}`)
            .then(response => response.json())

    findAllServiceCategories = () =>
        fetch(baseURL +  `/api/categories`)
            .then(response => response.json())

    pagedServiceCategories = (page, count) =>
        fetch(baseURL + `/api/categories/paged?page=${page}&count=${count}`)
            .then(response => response.json())

    createServiceCategory = sc => {
        delete sc.id;
        return fetch(baseURL + `/api/categories`, {
            method: 'post',
            body: JSON.stringify(sc),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    updateServiceCategory = sc =>
        fetch(baseURL + `/api/categories/${sc.id}`, {
            method: 'put',
            body: JSON.stringify(sc),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    
    updateServiceCategoryScore = sc =>
        fetch(baseURL + `/api/categories/score/${sc.id}`, {
            method: 'put',
            body: JSON.stringify(sc),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

    deleteServiceCategory = id =>
        fetch(baseURL + `/api/categories/${id}`, {
            method: 'delete'
        })

    findAllServicesByCategoryName = catName =>
        fetch(baseURL +  `/api/${catName}`)
            .then(response => response.json())
}
