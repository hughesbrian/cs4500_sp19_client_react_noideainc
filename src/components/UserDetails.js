import React from 'react'

const UserDetails = ({users, user, setUser, cancel, selectUser, createUser, updateUser, deleteUser, redirect}) =>
    <div>
        <div>
            <h3>User Details</h3>
            <select
                value={user.id}
                onChange={(e) => selectUser(e.target.value)}
                className="form-control">
                <option value={-1} key={-1}>New User</option>
                {
                    users
                        .map(user =>
                            <option
                                value={user.id}
                                key={user.id}>
                                {user.username}
                            </option>
                        )
                }
            </select>
            <label>Username</label><br/>
            <input onChange={(e) =>
                setUser({
                    user: {
                        id: user.id,
                        username: e.target.value,
                        password: user.password,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                })} className="form-control"
                   value={user.username}/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(
                    {
                        user: {
                            id: user.id,
                            username: user.username,
                            password: e.target.value,
                            firstName: user.firstName,
                            lastName: user.lastName
                        }
                    })} className="form-control"
                   value={user.password}/>
            <label>First Name</label>
            <input onChange={(e) =>
                setUser({
                    user: {
                        id: user.id,
                        username: user.username,
                        password: user.password,
                        firstName: e.target.value,
                        lastName: user.lastName
                    }
                })} className="form-control"
                   value={user.firstName}/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setUser({
                    user: {
                        id: user.id,
                        username: user.username,
                        password: user.password,
                        firstName: user.firstName,
                        lastName: e.target.value
                    }
                })} className="form-control"
                   value={user.lastName}/>
        </div>
        <div>
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
            <button className="btn btn-danger" onClick={
                () => {
                    deleteUser().then(window.setTimeout(redirect("/admin/users/"), 500))
                }
            }>Delete User
            </button>
            <button className="btn btn-primary" onClick={
                () => {
                    createUser().then(window.setTimeout(redirect("/admin/users/"), 500))
                }
            }>Add User
            </button>
            <button className="btn btn-success" onClick={
                () => {
                    updateUser().then(window.setTimeout(redirect("/admin/users/"), 500))
                }
            }>Update User
            </button>
        </div>
    </div>

export default UserDetails