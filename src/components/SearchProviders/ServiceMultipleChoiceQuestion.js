import React from 'react'

const ServiceMultipleChoiceQuestion = ({serviceQuestion}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
            serviceQuestion.choices.map(choice =>
                <div>
                    <label>
                        <input name={serviceQuestion.question} type="radio"/>
                        &nbsp;
                        {choice.title}
                    </label>
                </div>
            )
        }
        <br/>
    </div>

export default ServiceMultipleChoiceQuestion