
import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
import ServiceTrueFalseQuestion from './ServiceTrueFalseQuestion'
import ServiceRangeAnswerQuestion from "./ServiceRangeAnswerQuestion";
const ServiceQuestion = ({serviceQuestion}) =>
    <div>
        {
            serviceQuestion.type === 'MULTIPLE_CHOICE' &&
            <ServiceMultipleChoiceQuestion
                serviceQuestion={serviceQuestion}/>
        }
        {
            serviceQuestion.type === 'TRUE_FALSE' &&
            <ServiceTrueFalseQuestion
                serviceQuestion={serviceQuestion}/>
        }
        {
            serviceQuestion.type === 'RANGE' &&
            <ServiceRangeAnswerQuestion
                serviceQuestion={serviceQuestion}/>
        }

    </div>



export default ServiceQuestion