import React from "react";
import ServiceProviderNavigator from "./ServiceProviderNavigator";
import ServiceProviders from "../../test/MockData/Users.mock";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import ServiceQuestions from "../ServiceQuestions";
import ServiceService from '../../services/ServiceService';
import ServiceQuestionService from '../../services/ServiceQuestionService';
{/* import serviceQuestions from '../../test/MockData/ServiceQuestion.mock' 
import ServiceQuestions from "../ServiceQuestions";
import ServiceService from '../../services/ServiceService';*/}


class ServiceProviderNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
        {/* SERVICE SELECTED HARD CODED FOR NOW */}
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.service = 123
        this.state = {
            questions: [],
            criteria: []
    }
    this.add_Criteria = this.add_Criteria.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.serviceQuestionService.findAllServiceQuestionsByServiceId(this.service).then((questions) => {
            var serviceQuestions = questions
            console.log(serviceQuestions)
            console.log(serviceQuestions[0])
            console.log(serviceQuestions[1])
            serviceQuestions.map(function(question){
                question.choices = question.choices.split(',')
            })
        
            this.setState({
                questions: serviceQuestions,
                criteria: new Array(serviceQuestions.length)
            })
        })

    }

    updateQuestions = (service_id) => this.serviceQuestionService
                                .findAllServiceQuestionsByServiceId(service_id)
                                .then(questions =>
                                    this.setState({
                                        questions: questions
                                    }));


    add_Criteria = e =>

    {
        console.log(this.state.criteria)
        if(e[1].type == "TRUE_FALSE"){
            if(this.state.criteria[this.state.questions.indexOf(e[1])] == null){
                this.state.criteria[this.state.questions.indexOf(e[1])] = 1
            }
            else{
                this.state.criteria[this.state.questions.indexOf(e[1])] = this.state.criteria[this.state.questions.indexOf(e[1])] * -1
            }
            console.log(this.state.criteria)
            return
        }
        if(e[1].type == "RANGE"){
            if(this.state.criteria[this.state.questions.indexOf(e[1])] == null){
                this.state.criteria[this.state.questions.indexOf(e[1])] = new Array(e[1].choices.length)
                this.state.criteria[this.state.questions.indexOf(e[1])][e[1].choices.indexOf(e[0])] = 1
            }
            else{
                if(this.state.criteria[this.state.questions.indexOf(e[1])][e[1].choices.indexOf(e[0])] == null){
                    this.state.criteria[this.state.questions.indexOf(e[1])][e[1].choices.indexOf(e[0])] = 1
                }
                else {
                    this.state.criteria[this.state.questions.indexOf(e[1])][e[1].choices.indexOf(e[0])] = this.state.criteria[this.state.questions.indexOf(e[1])][e[1].choices.indexOf(e[0])] * -1
                }
            }
            console.log(this.state.criteria)
            return
        }
        this.state.criteria[this.state.questions.indexOf(e[1])] = e[0]
        console.log(this.state.criteria)
    }




    render = () =>

        <ServiceProviderNavigator serviceProviders = {ServiceProviders}
                                            serviceCategories = {serviceCategories}
                                            serviceQuestions = {this.state.questions}
                                            Criteria = {this.state.criteria}
                                            add_Criteria = {this.add_Criteria}/>;


}

export default ServiceProviderNavigatorContainer