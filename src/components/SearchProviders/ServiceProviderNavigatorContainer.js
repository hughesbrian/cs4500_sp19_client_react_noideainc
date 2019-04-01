import React from "react";
import ServiceProviderNavigator from "./ServiceProviderNavigator";
import ServiceProviders from "../../test/MockData/Users.mock";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import serviceQuestions from '../../test/MockData/ServiceQuestion.mock'


class ServiceProviderNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => <ServiceProviderNavigator serviceProviders = {ServiceProviders}
                                            serviceCategories = {serviceCategories}
                                            serviceQuestions = {serviceQuestions}
                                            history/>;

}

export default ServiceProviderNavigatorContainer