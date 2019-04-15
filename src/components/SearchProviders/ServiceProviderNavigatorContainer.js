import React from "react";
import ServiceProviderNavigator from "./ServiceProviderNavigator";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import ServiceSearchService from "../../services/ServiceSearchService";
import ServiceQuestionService from '../../services/ServiceQuestionService';

class ServiceProviderNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.servicesearch = ServiceSearchService.getInstance()
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        {/* SERVICE SELECTED HARD CODED FOR NOW */}
        this.service = 123
        this.state = {
            providers: [],
            questions: [],
            criteria: [],
            zip: ""
    }
    this.add_Criteria = this.add_Criteria.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.serviceQuestionService.findAllServiceQuestionsByServiceId(this.service).then((questions) => {
            var serviceQuestions = questions
            // console.log(serviceQuestions)
            // console.log(serviceQuestions[0])
            // console.log(serviceQuestions[1])
            serviceQuestions.map(function(question){
                question.choices = question.choices.split(',')
            })
        
            this.setState({
                questions: serviceQuestions,
                criteria: new Array(serviceQuestions.length)
            })
        })

        this.send_request()
    }

    updateQuestions = (service_id) => this.serviceQuestionService
                                .findAllServiceQuestionsByServiceId(service_id)
                                .then(questions =>
                                    this.setState({
                                        questions: questions
                                    }),
                                    this.send_request()
                                    );


    add_Criteria = e =>

    {
        //console.log(this.state.criteria)
        if(e[1].type == "TRUE_FALSE"){
            if(this.state.criteria[this.state.questions.indexOf(e[1])] == null){
                this.state.criteria[this.state.questions.indexOf(e[1])] = 1
            }
            else{
                this.state.criteria[this.state.questions.indexOf(e[1])] = this.state.criteria[this.state.questions.indexOf(e[1])] * -1
            }
            //console.log(this.state.criteria)
            return
        }
        if(e[1].type == "RANGE"){
            if(this.state.criteria[this.state.questions.indexOf(e[1])] == null){
                this.state.criteria[this.state.questions.indexOf(e[1])] = new Array(e[1].choices.length).fill(-1)
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
            //console.log(this.state.criteria)
            return
        }
        this.state.criteria[this.state.questions.indexOf(e[1])] = e[1].choices.indexOf(e[0])
        //console.log(this.state.criteria)
        this.send_request()
    }

    send_request = (e) => {
        if(window.location.pathname === '/providers') {
            this.servicesearch.getResults(this.service, this.state.criteria, this.state.questions).then((new_providers) => {
                this.setState
                ({
                    providers: new_providers
                })
            })
        } else {
            this.findProviders()
        }
    }

    findProviders = async () => {
        let params = window.location.pathname.split('/');
        var name;
        var zip;
        var param;
        var filteredProviders
        let providers = await this.servicesearch.getResults(this.service, this.state.criteria, this.state.questions);

        if(params.length == 4) {
            name = params[2]
            zip = params[3]
            filteredProviders = providers.filter(function (provider) {
                return provider.username.includes(name) && provider.addresses[0].zip === zip
            });
        } else {
            param = params[2]
            if(isNaN(param)) {
                filteredProviders = providers.filter(function (provider) {
                    return provider.username.includes(param)
                });
            } else {
                filteredProviders = providers.filter(function (provider) {
                    return provider.addresses[0].zip === param
                });
            }
        }
        
        this.setState({
            providers: filteredProviders
        })
    }


    render = () =>
        <ServiceProviderNavigator history = {this.props.history}
                                        serviceProviders = {this.state.providers}
                                        serviceCategories = {serviceCategories}
                                        serviceQuestions = {this.state.questions}
                                        Criteria = {this.state.criteria}
                                        add_Criteria = {this.add_Criteria}
                                        send_request = {this.send_request}
                                        findProviders= {this.findProviders}/>;


}

export default ServiceProviderNavigatorContainer