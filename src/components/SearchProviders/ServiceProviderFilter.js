import React from 'react'
import ServiceQuestion from './ServiceQuestion'

const ServiceProviderFilter = ({serviceQuestions,Criteria,add_Criteria}) =>
    <div>
        <h4>Filters</h4>
        <br/>
        {
            Array.from(serviceQuestions).map(question =>

                <ServiceQuestion
                    serviceQuestion={question}
                    Criteria = {Criteria}
                    add_Criteria = {add_Criteria}/>
            )
        }
    </div>

export default ServiceProviderFilter