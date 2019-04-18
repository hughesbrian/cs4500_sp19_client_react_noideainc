import React from 'react'
import '../../css/Register.scss'
import { Button } from 'react-bootstrap';

const Register = ({first, last, username, email, password, updateField, register}) => {
    return (
        <div className="register-form">
            <h1 className="header">Create Your Account</h1>
            <div className="form">
                <div className="field">
                    <label>First Name</label>
                    <input value={first} name="first" onChange={updateField} className="input-field"></input>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input value={last} name="last" onChange={updateField} className="input-field"></input>
                </div>
                <div className="field">
                    <label>Username</label>
                    <input value={username} name="username" onChange={updateField} className="input-field"></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input value={email} name="email" onChange={updateField} className="input-field"></input>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} type="password" name="password" onChange={updateField} className="input-field"></input>
                </div>
                <Button onClick={register} className="register-button">SIGN UP</Button>
            </div>
        </div>
    )
}

export default Register