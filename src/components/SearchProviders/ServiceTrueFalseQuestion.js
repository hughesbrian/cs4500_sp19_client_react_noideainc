import React from 'react'

const ServiceTrueFalseQuestion = ({serviceQuestion, Criteria, add_Criteria}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
                <div>
                    <label>
                        <input name={serviceQuestion.question} type="checkbox"
                                onChange = { (e) => add_Criteria([e.target.checked,serviceQuestion])}/>

                        &nbsp;
                    </label>
                </div>
        }
        <br/>
    </div>

export default ServiceTrueFalseQuestion