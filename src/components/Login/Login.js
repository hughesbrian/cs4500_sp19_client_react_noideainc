import React from 'react'

const Login = ({email, password, updateField, login}) =>
    <div className="container">
        <h1>Welcome back</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label htmlFor ="email">Email</label>
                    <input onChange={updateField} value={email} id="email" name="email" className="form-control"/>
                </div>
                <div className="col-12">
                    <br/>
                    <label htmlFor ="password">Password</label>
                    <input onChange={updateField} value={password} id="password" name="password" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="remember">
                        <input type="checkbox"/>
                        &nbsp; Remember me
                    </label>
                </div>
                <div className="col-6">
                    <a className="float-right" href="#">Forgot password?</a>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a onClick={login} className="btn btn-primary btn-block">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>

export default Login