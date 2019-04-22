export default class UserService {
    static instance = null;

    //backend_url = 'http://localhost:8080';
    backend_url = 'https://cs4500-sp19-noideainc.herokuapp.com';

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(`${this.backend_url}/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(`${this.backend_url}/api/users`)
            .then(response => response.json())
    createUser = user =>
        fetch(`${this.backend_url}/api/users`,
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    updateUser = user =>
        fetch(`${this.backend_url}/api/users/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    deleteUser = user =>
        fetch(`${this.backend_url}/api/users/${user.id}`,
            {
                method: 'DELETE',
            })

    updateProfile = user =>
        fetch(`${this.backend_url}/api/profile/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
}