import React from 'react'
import ServiceProvider from './ServiceProvider'
const ServiceProviderList = ({serviceProviders}) =>
    <div>
        {
            Array.from(serviceProviders).map(serviceProvider =>
                <ServiceProvider
                    serviceProvider={serviceProvider}/>
            )
        }
    </div>

export default ServiceProviderList