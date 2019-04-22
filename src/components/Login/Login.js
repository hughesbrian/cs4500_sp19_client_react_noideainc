import React from 'react'

const Login = ({email, password, updateField, login}) =>
    <div className="container">
        <h1>Welcome back</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label className="label" htmlFor ="email">Email</label>
                    <input onChange={updateField} value={email} id="email" name="email" className="form-control email"/>
                </div>
                <div className="col-12">
                    <br/>
                    <label className="label" htmlFor ="password">Password</label>
                    <input onChange={updateField} value={password} type="password" id="password" name="password" className="form-control password"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <label className="label" htmlFor="remember">
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
                <div onClick={login}  className="col-12 login">
                    <a className="btn btn-primary btn-block">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>

export default Login