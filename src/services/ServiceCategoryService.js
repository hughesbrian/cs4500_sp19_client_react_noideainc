export default class ServiceCategoryService {
    static instance = null;

    static getInstance() {
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }

    findServiceCategoryById = categoryId =>
        fetch(`cs4500-sp19-noideainc.herokuapp.com/api/categories/${categoryId}`)
            .then(response => response.json())
    findAllServiceCategories = () =>
        fetch("cs4500-sp19-noideainc.herokuapp.com/api/categories")
            .then(response => response.json())
}
