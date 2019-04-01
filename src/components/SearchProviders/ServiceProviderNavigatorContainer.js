import React from "react";
import ServiceProviderNavigator from "./ServiceProviderNavigator";
import ServiceProviders from "../../test/MockData/Users.mock";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import serviceQuestions from '../../test/MockData/ServiceQuestion.mock'
import ServiceQuestions from "../ServiceQuestions";


class ServiceProviderNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: serviceQuestions,
            criteria : new Array(serviceQuestions.length)
    }
    this.add_Criteria = this.add_Criteria.bind(this)
    }


    add_Criteria = e =>
        //console.log(this.state.questions)

    {
        console.log(this.state.criteria)
        this.state.criteria[this.state.questions.indexOf(e[1])] = e[0]
    console.log(this.state.criteria)}



    render = () =>

        <ServiceProviderNavigator serviceProviders = {ServiceProviders}
                                            serviceCategories = {serviceCategories}
                                            serviceQuestions = {this.state.questions}
                                            Criteria = {this.state.criteria}
                                            add_Criteria = {this.add_Criteria}/>;


}

export default ServiceProviderNavigatorContainer