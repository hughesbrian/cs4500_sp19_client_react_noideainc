import React from 'react'

const ServiceTrueFalseQuestion = ({serviceQuestion}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
                <div>
                    <label>
                        <input name={serviceQuestion.question} type="checkbox"/>
                        &nbsp;
                    </label>
                </div>
        }
        <br/>
    </div>

export default ServiceTrueFalseQuestion