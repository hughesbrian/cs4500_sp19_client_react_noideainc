import React from 'react'
import _ from 'lodash'

const Business = ({user, businessName, yearFounded, numOfEmployees, businessEmail,
                   street, city, state, zip, facebook, instagram, twitter, creditCard,
                   cash, check, venmo, paypal, square, bitcoin, updateField, updateCheckbox,
                   save}) =>
    <div className="container">
        <h1>Business</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label>Business name</label>
                    <input name="businessName" onChange={updateField} className="form-control" value={businessName}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label>Year founded</label>
                    <input name="yearFounded" onChange={updateField} className="form-control" value={yearFounded}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label>Number of employees</label>
                    <input name="numOfEmployees" onChange={updateField} className="form-control" value={numOfEmployees}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label>Email</label>
                    <input name="businessEmail" onChange={updateField} className="form-control" value={businessEmail}/>
                </div>
            </div>
            <br/>
            <h4>Business address (optional)</h4>
            <div className="row">
                <div className="col-12">
                    <label>Street</label>
                    <input name="street" onChange={updateField} className="form-control" value={street}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <br/>
                    <label>City</label>
                    <input name="city" onChange={updateField} className="form-control" value={city}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <br/>
                    <label>State</label>
                    <select name="state"
                            className="form-control"
                            onChange={updateField}
                            value={state}>
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option>
                    </select>
                </div>
                <div className="col-6">
                    <br/>
                    <label>Zip</label>
                    <input name="zip" onChange={updateField} className="form-control" value={zip}/>
                </div>
            </div>
            <br/>
            <h4>Payment methods accepted</h4>
            <div className="row">
                <div className="col-12">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label>
                                <input id="creditCard"
                                       name="creditCard"
                                       type="checkbox"
                                       checked={creditCard}
                                       onChange={updateCheckbox}/> Credit card
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="cash"
                                       name="cash"
                                       type="checkbox"
                                       checked={cash}
                                       onChange={updateCheckbox}/> Cash
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="check"
                                       name="check"
                                       type="checkbox"
                                       checked={check}
                                       onChange={updateCheckbox}/> Check
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="venmo"
                                       name="venmo"
                                       type="checkbox"
                                       checked={venmo}
                                       onChange={updateCheckbox}/> Venmo
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="paypal"
                                       name="paypal"
                                       type="checkbox"
                                       checked={paypal}
                                       onChange={updateCheckbox}/> Paypal
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="square"
                                       name="square"
                                       type="checkbox"
                                       checked={square}
                                       onChange={updateCheckbox}/> Square
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input id="bitcoin"
                                       name="bitcoin"
                                       type="checkbox"
                                       checked={bitcoin}
                                       onChange={updateCheckbox}/> Bitcoin
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <h4>Social media</h4>
            <div className="row">
                <div className="col-12">
                    <label>Facebook</label>
                    <input
                        name="facebook"
                        placeholder="Enter Facebook URL"
                        className="form-control"
                        onChange={updateField}
                        value={facebook}/>
                </div>
                <div className="col-12">
                    <br/>
                    <label>Instagram</label>
                    <input
                        name="instagram"
                        placeholder="Enter Instagram URL"
                        className="form-control"
                        onChange={updateField}
                        value={instagram}/>
                </div>
                <div className="col-12">
                    <br/>
                    <label>Twitter</label>
                    <input
                        name="twitter"
                        placeholder="Enter Twitter URL"
                        className="form-control"
                        onChange={updateField}
                        value={twitter}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success btn-block"
                       onClick={save}>
                        Save
                    </a>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>

export default Business
