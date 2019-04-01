import React from 'react'


const ServiceRangeAnswerQuestion = ({serviceQuestion}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
            serviceQuestion.choices.map(choice =>
                <div>
                    <label>
                        <input name={serviceQuestion.question} type="checkbox"/>
                        &nbsp;
                        {choice}
                    </label>
                </div>
            )
        }
        <br/>
    </div>

export default ServiceRangeAnswerQuestion