import React from 'react'
import Users from '../../components/Users'
import TestRenderer from 'react-test-renderer'
import users from '../MockData/Users.mock'
import UserService from '../../services/UserService'
import '../service/UserService.mock'
import UsersContainer from "../../components/UsersContainer";

const userService = UserService.getInstance();

test('Create and Delete Users', () => {
    let spidey = {id: 345, username: "pparker", password: "iamspiderman", firstName: "Peter", lastName: "Parker"};

    const saveUser = () => {
        users.push(spidey);

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const deleteUser = userId => {
        users.splice(0, 1)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const testRenderer = TestRenderer.create(
        <Users users={users} editingUser={spidey} deleteUser={deleteUser} saveUser={saveUser}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const createUserBtn = testInstance.findByProps({className: 'btn btn-success save-user-btn'});
    createUserBtn.props.onClick();
    createUserBtn.props.onClick();

    const deleteUserBtns = testInstance.findAllByProps({className: 'btn btn-danger delete-user-btn'});
    deleteUserBtns[1].props.onClick();
});

test('List of Users Renders Directly', () => {
    const testRenderer = TestRenderer.create(
        <Users users={users} editingUser={users[0]}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const usernameField = testInstance.findByProps({className: 'form-control username-edit-field'});
    const numUsers = testInstance.findAllByProps({className: 'btn btn-danger delete-user-btn'});

    expect(usernameField.props.value).toBe('nate');
    expect(numUsers.length).toBe(users.length);
});

test('List of Users Renders from Service', () => {
    userService.findAllUsers().then(users => {
        const testRenderer = TestRenderer.create(
            <Users users={users} editingUser={users[0]}/>
        );

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        const testInstance = testRenderer.root;

        const usernameField = testInstance.findByProps({className: 'form-control username-edit-field'});
        const numUsers = testInstance.findAllByProps({className: 'btn btn-danger delete-user-btn'});

        expect(usernameField.props.value).toBe('nate');
        expect(numUsers.length).toBe(users.length);
    });
});