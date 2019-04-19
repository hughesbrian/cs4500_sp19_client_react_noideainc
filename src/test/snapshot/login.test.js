import React from 'react'
import Login from '../../components/Login/Login'
import TestRenderer from 'react-test-renderer'
import users from "../MockData/Users1.mock.json"   
import '../mockservice/UserAuthenticationService.mock'

test('test login', () => {
    const login = () => {

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot()
        
        return users[0]

    }

    const testRenderer = TestRenderer.create(
        <Login 
            email={users[0].email}
            password={users[0].password}
            login={login}
        />
    )

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root

    const loginButton = testInstance.findByProps({className: 
    'col-12 login'})

    loginButton.props.onClick()

})

test('test render login page correctly', () => {

    const testRenderer = TestRenderer.create(
        <Login 
            email={users[0].email}
            password={users[0].password}
        />
    )

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root

    const email = testInstance.findByProps({className: "form-control email"})
    const password = testInstance.findByProps({className: "form-control password"})
    const rows = testInstance.findAllByProps({className: "row"})
    const labels = testInstance.findAllByProps({className: "label"})

    expect(email.props.value).toBe('nate@gamil.com')
    expect(password.props.value).toBe('p4ssw0rd')
    expect(rows.length).toBe(3)
    expect(labels.length).toBe(3)

})