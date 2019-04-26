import React from 'react'

const Profile = ({userId, firstName, lastName, birthday, address, email, handleChangeInput, updateProfile}) => {
    return(<div className="container">
        <h1>Profile</h1>
        <a className="btn btn-light" href={"/Profile/" + userId + "/business/"} role="button">My Business</a>
        <span> </span>
        <a className="btn btn-light" href="/services" role="button">My Services</a>
        <br/>
        <br/>
        <form id="prifle-form" onSubmit={updateProfile}>
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
                            id="user-birthday"
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
                    <select name="state" id="user-state" className="form-control" value={address.state} onChange={handleChangeInput}>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
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
                    <input id="submit-profile" className="btn btn-success btn-block" type="submit" value="Update Account"></input>
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
