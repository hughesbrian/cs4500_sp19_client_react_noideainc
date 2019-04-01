import React from 'react'

const ServiceMultipleChoiceQuestion = ({serviceQuestion}) =>
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

export default ServiceMultipleChoiceQuestion