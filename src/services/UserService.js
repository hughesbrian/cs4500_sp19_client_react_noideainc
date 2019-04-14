export default class UserService {
    static instance = null;

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/users`)
            .then(response => response.json())
    createUser = user =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/users`,
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    updateUser = user =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/users/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    deleteUser = user =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/users/${user.id}`,
            {
                method: 'DELETE',
            })

    updateProfile = user =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/profile/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
}