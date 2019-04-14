import React from 'react'

const Profile = ({firstName, lastName, birthday, address, email, handleChangeInput, updateProfile}) => {
    return(<div className="container">
        <h1>Profile</h1>
        <a className="btn btn-light" href="/business" role="button">My Business</a>
        <span> </span>
        <a className="btn btn-light" href="/services" role="button">My Services</a>
        <br/>
        <br/>
        <form onSubmit={updateProfile}>
            <h4>Legal name</h4>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name" 
                            name="firstName"
                            className="form-control" 
                            value={firstName}
                            onChange={handleChangeInput}/>
                </div>
                <div className="col-6">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name" 
                            name="lastName"
                            className="form-control"
                            value={lastName}
                            onChange={handleChangeInput}/>
                </div>
            </div>
            <br/>
            <h4>Date of birth</h4>
            <div className="row">
                <div className="col-4">
                    <input className="form-control" 
                            type="date" 
                            name="birthday" 
                            value={birthday}
                            onChange={handleChangeInput}></input>
                </div>
            </div>
            <br/>
            <h4>Home address</h4>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="street">Street</label>
                    <input id="street" 
                            type="text"
                            name="street"
                            className="form-control"
                            value={address.street}
                            onChange={handleChangeInput}
                            />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" className="form-control" 
                    value={address.city} 
                    onChange={handleChangeInput}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="state">State</label>
                    <select name="state" className="form-control" value={address.state} onChange={handleChangeInput}>
                        <option value="MA">MA</option>
                        <option value="NH">NH</option>
                        <option value="NY">NY</option>
                        <option value="CA">CA</option>
                    </select>
                </div>
                <div className="col-6">
                    <label htmlFor="zip">Zip</label>
                    <input id="zip" name="zip" className="form-control" 
                    value={address.zip} 
                    onChange={handleChangeInput}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label htmlFor="email">Email</label>
                    <input id="email" 
                            name="email"
                            className="form-control"
                            value={email}
                            readOnly={true}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <input className="btn btn-success btn-block" type="submit" value="Update Account"></input>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </form>
    </div>)
}

export default Profile