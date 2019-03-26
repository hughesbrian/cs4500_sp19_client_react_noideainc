import React from 'react'

const Users = ({users, editingUser, setEditingUser, deleteUser, createUser, updateUser, saveUser}) =>
    <div>
        <h3>Users</h3>

        <table className="table">
            <tbody>
            <tr>
                <td><input onChange={(e) =>
                    setEditingUser({
                        editingUser: {
                            id: editingUser.id,
                            username: e.target.value,
                            password: editingUser.password,
                            firstName: editingUser.firstName,
                            lastName: editingUser.lastName
                        }
                    })} className="form-control username-edit-field"
                           value={editingUser.username}/></td>
                <td><input onChange={(e) =>
                    setEditingUser({
                        editingUser: {
                            id: editingUser.id,
                            username: editingUser.username,
                            password: editingUser.password,
                            firstName: e.target.value,
                            lastName: editingUser.lastName
                        }
                    })} className="form-control"
                           value={editingUser.firstName}/></td>
                <td><input onChange={(e) =>
                    setEditingUser(
                        {
                            editingUser: {
                                id: editingUser.id,
                                username: editingUser.username,
                                password: editingUser.password,
                                firstName: editingUser.firstName,
                                lastName: e.target.value
                            }
                        })} className="form-control"
                           value={editingUser.lastName}/></td>
                <td>
                    <button className="btn btn-success save-user-btn" onClick={() => {
                        saveUser(editingUser, createUser, updateUser)
                    }}>Save
                    </button>
                    <button className="btn btn-warning" onClick={() => {
                        setEditingUser({
                            editingUser: {
                                username: '',
                                password: '',
                                firstName: '',
                                lastName: ''
                            }
                        })
                    }}>Clear
                    </button>
                </td>
            </tr>
            {
                users.map(user =>
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                editingUser = user
                            }}
                            >Edit
                            </button>
                            <button className="btn btn-danger delete-user-btn" onClick={
                                () => deleteUser(user)
                            }>Delete
                            </button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>;

export default Users