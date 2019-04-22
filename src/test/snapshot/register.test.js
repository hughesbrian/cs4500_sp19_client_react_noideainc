import React from 'react'
import TestRenderer from 'react-test-renderer'
import users from "../MockData/NewUsers.mock.json"   
import '../mockservice/UserAuthenticationService.mock'
import Register from '../../components/Signup/Register';

test('test sign up', () => {
    const register = () => {
        return users[0]
    }

    const testRenderer = TestRenderer.create(

        <Register 
            first={users[0].firstName} 
            last={users[0].lastName} 
            username={users[0].username}
            email={users[0].email} 
            password={users[0].password}
            register={register}
            />
    )

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root

    const registerButton = testInstance.findByProps({className: 'register-button'})

    registerButton.props.onClick()

})

test('test render sign up page correctly', () => {

    const testRenderer = TestRenderer.create(
        <Register 
            first={users[0].firstName} 
            last={users[0].lastName} 
            username={users[0].username}
            email={users[0].email} 
            password={users[0].password}
            />
    )

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root

    const first = testInstance.findByProps({className: "input-field first"})
    const last = testInstance.findByProps({className: "input-field last"})
    const username = testInstance.findByProps({className: "input-field username"})
    const email = testInstance.findByProps({className: "input-field email"})
    const password = testInstance.findByProps({className: "input-field password"})
    const fields = testInstance.findAllByProps({className: "field"})

    expect(first.props.value).toBe('luna')
    expect(last.props.value).toBe('Liu')
    expect(username.props.value).toBe('luna')
    expect(email.props.value).toBe('luna@gmail.com')
    expect(password.props.value).toBe('luna')
    expect(fields.length).toBe(5)

})