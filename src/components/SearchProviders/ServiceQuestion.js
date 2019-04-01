
import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
import ServiceTrueFalseQuestion from './ServiceTrueFalseQuestion'
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

    </div>



export default ServiceQuestion