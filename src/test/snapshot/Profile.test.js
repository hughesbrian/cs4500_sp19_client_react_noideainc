import React from 'react'
import ProfileContainer from '../../components/Profile/ProfileContainer'
import Profile from '../../components/Profile/Profile'
import TestRenderer from 'react-test-renderer';
import UserService from '../../services/UserService'
import userMock from '../MockData/UserProfile.mock.json';

const userService = UserService.getInstance();

test('User profile renders correctly', () => {
    const testRenderer = TestRenderer.create(
        <ProfileContainer
            userService={userService}
            user={userMock}
            />
        )
            let tree = testRenderer.toJSON();
            expect(tree).toMatchSnapshot()
});

test('User profile updates correctly', () => {
    // dummy functions
    const updateProfile = jest.fn();
    const handleChangeInput = jest.fn();

    const testRenderer = TestRenderer.create(
        <Profile
            userId={userMock.id}
            firstName={userMock.firstName}
            lastName={userMock.lastName}
            birthday={userMock.birthday}
            address={userMock.address}
            email={userMock.email}
            handleChangeInput={handleChangeInput}
            updateProfile={updateProfile}
        />
    )

    let tree = testRenderer.toJSON();
    const testInstance = testRenderer.root
    const profileForm =  testInstance.findByProps({ id: 'prifle-form' });
    const firstNameField = testInstance.findByProps({ id: 'first-name' })
    const lastNameField = testInstance.findByProps({ id: 'last-name' })
    const birthdayField = testInstance.findByProps({ id: 'user-birthday' })
    const streetField = testInstance.findByProps({ id: 'street' })
    const cityField = testInstance.findByProps({ id: 'city' })
    const stateField = testInstance.findByProps({ id: 'user-state' })
    const zipField = testInstance.findByProps({ id: 'zip' })
    const inputFields = testInstance.findAllByProps({ className: 'form-control' })

    birthdayField.props.onChange()
    streetField.props.onChange()
    cityField.props.onChange()
    stateField.props.onChange()
    zipField.props.onChange()
    profileForm.props.onSubmit()

    expect(handleChangeInput).toHaveBeenCalled();
    expect(updateProfile).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
    expect(inputFields.length).toBe(8)

    // check input values
    expect(firstNameField.props.value).toBe("Bob")
    expect(lastNameField.props.value).toBe("Wonder")
    expect(birthdayField.props.value).toBe("1/01/1994")
    expect(streetField.props.value).toBe("123 Washington St.")
    expect(cityField.props.value).toBe("Boston")
    expect(stateField.props.value).toBe("MA")
    expect(zipField.props.value).toBe("02117")
})
