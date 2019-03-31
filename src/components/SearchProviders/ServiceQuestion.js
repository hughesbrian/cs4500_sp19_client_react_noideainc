
import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
const ServiceQuestion = ({serviceQuestion}) =>
    <div>
        {
            serviceQuestion.questionType === 'MULTIPLE-CHOICE' &&
            <ServiceMultipleChoiceQuestion
                serviceQuestion={serviceQuestion}/>
        }
    </div>

export default ServiceQuestion