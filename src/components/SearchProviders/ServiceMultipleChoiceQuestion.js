import React from 'react'

const ServiceMultipleChoiceQuestion = ({serviceQuestion, Criteria, add_Criteria}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
            Array.from(serviceQuestion.choices).map(choice =>
                <div>
                    <label>
                        <input name={serviceQuestion.question} type="radio"
                               onChange = { (e) => add_Criteria([choice,serviceQuestion])}/>
                        &nbsp;
                        {choice}
                    </label>
                </div>
            )
        }
        <br/>
    </div>

export default ServiceMultipleChoiceQuestion