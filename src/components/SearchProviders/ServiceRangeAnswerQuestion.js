import React from 'react'


const ServiceRangeAnswerQuestion = ({serviceQuestion, Criteria, add_Criteria}) =>
    <div>
        <h5>{serviceQuestion.question}</h5>
        {
            Array.from(serviceQuestion.choices).map(choice =>
                <div>
                    <label>

                        <input name={serviceQuestion.question} type="checkbox"
                               onChange = { (e) => add_Criteria([choice,serviceQuestion])}/>
                        &nbsp;
                        {choice}
                    </label>
                </div>
            )
        }
        <br/>
    </div>

export default ServiceRangeAnswerQuestion