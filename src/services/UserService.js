export default class UserService {
    static instance = null;

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(`cs4500-sp19-noideainc.herokuapp.com/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch("cs4500-sp19-noideainc.herokuapp.com/api/users")
            .then(response => response.json())
}