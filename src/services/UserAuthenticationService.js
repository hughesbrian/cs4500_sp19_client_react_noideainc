const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://cs4500-sp19-noideainc.herokuapp.com'

export default class UserAuthenticationService {
    static instance = null;

    static getInstance() {
        if (UserAuthenticationService.instance === null) {
            UserAuthenticationService.instance = new UserAuthenticationService()
        }
        return this.instance
    }

    login = user => 
        fetch(baseURL + "/api/login", 
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'},
                credentials: "include"
            }
        ).then(response => {
            return response.json()
        })

    logout = () => 
        fetch(baseURL + "/api/logout", 
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                credentials: "include"
            }
        ).then(response => response.json())

    checkLogin = () => 
        fetch(baseURL + "/api/checkLogin", {
            method: 'GET',
            credentials: "include"
        })
        .then(response => {
            return response.json()
        })

}