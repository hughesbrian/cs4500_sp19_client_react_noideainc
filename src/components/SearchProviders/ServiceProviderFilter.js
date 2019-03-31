import React from 'react'
import ServiceQuestion from './ServiceQuestion'

const ServiceProviderFilter = ({serviceQuestions}) =>
    <div>
        <h4>Filters</h4>
        <br/>
        {
            serviceQuestions.map(question =>
                <ServiceQuestion
                    serviceQuestion={question}/>
            )
        }
    </div>

export default ServiceProviderFilter