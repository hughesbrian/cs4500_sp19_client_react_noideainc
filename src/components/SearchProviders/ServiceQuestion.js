
import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
import ServiceTrueFalseQuestion from './ServiceTrueFalseQuestion'
import ServiceRangeAnswerQuestion from "./ServiceRangeAnswerQuestion";
const ServiceQuestion = ({serviceQuestion, Criteria, add_Criteria}) =>
    <div>
        {
            serviceQuestion.type === 'MULTIPLE_CHOICE' &&
            <ServiceMultipleChoiceQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }
        {
            serviceQuestion.type === 'TRUE_FALSE' &&
            <ServiceTrueFalseQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }
        {
            serviceQuestion.type === 'RANGE' &&
            <ServiceRangeAnswerQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }

    </div>



export default ServiceQuestion