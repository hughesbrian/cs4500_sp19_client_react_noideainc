
import React from 'react'
import ServiceMultipleChoiceQuestion from './ServiceMultipleChoiceQuestion'
const ServiceQuestion = ({serviceQuestion}) =>
    <div>
        {
            serviceQuestion.type === 'MULTIPLE_CHOICE' &&
            <ServiceMultipleChoiceQuestion
                serviceQuestion={serviceQuestion}/>
        }
    </div>

export default ServiceQuestion