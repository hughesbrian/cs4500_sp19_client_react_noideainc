import ServiceProviderFilter from '../SearchProviders/ServiceProviderFilter'

import React from "react";
import ServiceProviderNavigator from "../SearchProviders/ServiceProviderNavigator";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import ServiceSearchService from "../../services/ServiceSearchService";
import ServiceQuestionService from '../../services/ServiceQuestionService';
import ServiceAnswerService from '../../services/ServiceAnswerService';
import UserService from '../../services/UserService';
import ServiceService from '../../services/ServiceService';
import ServiceCategoryService from '../../services/ServiceCategoryService';
import BusinessService from "./BusinessService";

class ServiceProviderNavigatorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.servicesearch = ServiceSearchService.getInstance()
        this.serviceService = ServiceService.getInstance()
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.userService = UserService.getInstance()
        {/* SERVICE SELECTED HARD CODED FOR NOW */}
        this.service = 123
        {/* PROVIDER SELECTED HARD CODED FOR NOW AS WELL */}
        this.provider = 231
        this.state = {
            providers: [],
            questions: [],
            criteria: [],
            zip: "",
            services: [],
            filteredServices: []
        }
        {/*
        this.services = [
            {
                "id": 777,
                "title": "cleaning1",
                "description": "p4ssw0rd",
                "serviceCategories": [
                    {"id": 1, "title": "Tutoring"},
                    {"id": 2, "title": "Fitness Trainer"}
                ]

            },
            {
                "id": 778,
                "title": "cleaning2",
                "description": "pa55word"
            }
        ]
        */}
        {/*this.services = []
        this.businessServices = []*/}
        this.add_Criteria = this.add_Criteria.bind(this)
        this.addService = this.addService.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateQuestions = this.updateQuestions.bind(this)
        this.removeFromServiceList = this.removeFromServiceList.bind(this)
        this.updateProviderInfo = this.updateProviderInfo.bind(this)
    }

    componentDidMount() {

        this.serviceService.findAllServices().then((all_services) => {
            this.setState({
                services: all_services
            })
        })

        {/* this.send_request() */}
    }

    updateProviderInfo() {
        this.userService.findUserById(this.provider).then((provider_data) => {
            var provider = provider_data;
            console.log(provider);
            var providerAnswers = provider_data.serviceAnswers;
            for(var i = 0; i < this.state.questions.length; i++) {
                for(var j = 0; j < providerAnswers.length; j++) {
                    //if found corresponding service answer for the question
                    if(this.state.questions[i].id == providerAnswers[j].serviceQuestion.id && this.state.criteria[i] != null){
                        if(this.state.questions[i].type == "TRUE_FALSE"){
                            providerAnswers[j].trueFalseAnswer = this.state.criteria[i];
                        }
                        else if(this.state.questions[i].type == "RANGE" && this.state.criteria[i] != null) {
                            console.log(this.state.criteria[i]);

                            //find index of min/max range values in the question choices
                            var min_idx = 0;
                            var max_idx = this.state.criteria[i].length - 1;
                            for(var k = 0; k < this.state.criteria[i].length; k ++){
                                if(this.state.criteria[i][k] == 1){
                                    max_idx = k;
                                }
                            }
                            for(var k = this.state.criteria[i].length - 1; k >= 0; k --){
                                if(this.state.criteria[i][k] == 1){
                                    min_idx = k;
                                }
                            }

                            providerAnswers[j].maxRangeAnswer = this.state.questions[i].choices[max_idx];
                            providerAnswers[j].minRangeAnswer = this.state.questions[i].choices[min_idx];
                        }
                        else if (this.state.criteria[i] != null) {
                            providerAnswers[j].choiceAnswer = this.state.questions[i].choices[this.state.criteria[i]];
                        }

                        this.userService.updateUser(provider_data).then((body) => {
                        {console.log("HERE")}
                        });
                    }
                }
            }
        });

        return;
    }

    updateQuestions(service_id) {

        this.serviceQuestionService.findAllServiceQuestionsByServiceId(service_id)
            .then((new_questions) => {

                new_questions.map(function(question) {
                    question.choices = question.choices.split(',')
                })

                this.setState({
                    questions: new_questions
                })
                {/*this.send_request()*/}
            })
    }

    removeFromServiceList(service_id) {
        for(var i = 0; i < this.state.filteredServices.length; i++){
            if(service_id == this.state.filteredServices[i].id){
                this.state.filteredServices.splice(i, 1)
            {/*THIS IS REDUNDANT BUT IS NECESSARY FOR COMPONENT TO UPDATE*/}
                this.setState({
                    filteredServices: this.state.filteredServices
                })
            }
        }
    }

    addService(service_id) {
        console.log(this.state.filteredServices);
        for(var i = 0; i < this.state.services.length; i++){
            if(service_id == this.state.services[i].id){
                this.state.filteredServices.push(this.state.services[i]);
                {/*THIS IS REDUNDANT BUT IS NECESSARY FOR COMPONENT TO UPDATE*/}
                this.setState({
                    filteredServices: this.state.filteredServices
                })
            }
        }
    }

    filterServices = e =>
    {
        if(e == ""){
            this.serviceService.findAllServices().then((all_services) => {
                this.setState({
                    services: all_services
                })
            })
        }
        else{
            this.serviceCategoryService.findAllServicesByCategoryName(e).then((filtered_services) => {
                this.setState({
                    services: filtered_services
                })
            })
            
            {/*var i = 0
            for(i = 0; i < this.services.length; i++){
                console.log("test test" + this.services[i].title)
                if(!(this.services[i].title.includes(e))){
                    this.services.splice(i,1)
                    i = i + 1;
                }
            }*/}
            
        }
    }


    add_Criteria = e =>

    {
        //console.log(this.state.criteria)
        if(e[1].type == "TRUE_FALSE"){
            console.log(e[0])
            if(this.state.criteria[this.state.questions.indexOf(e[1])] == null){
                this.state.criteria[this.state.questions.indexOf(e[1])] = e[0]
            }
            else{
                this.state.criteria[this.state.questions.indexOf(e[1])] = e[0]
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
        //this.send_request()
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
        let name = params[2]
        let zip = params[3]
        let providers = await this.servicesearch.getResults(this.service, this.state.criteria, this.state.questions);

        var filteredProviders = providers.filter(function (provider) {
            return provider.username === name && provider.businessAddress.zip === zip
        });
        this.setState({
            providers: filteredProviders
        })
    }


    render = () =>
        <BusinessService history = {this.props.history}
                                  serviceProviders = {this.state.providers}
                                  serviceCategories = {serviceCategories}
                                  serviceQuestions = {this.state.questions}
                                  Criteria = {this.state.criteria}
                                  add_Criteria = {this.add_Criteria}
                                  send_request = {this.send_request}
                                  findProviders= {this.findProviders}
                                  Services  = {this.state.services}
                                  BusinessServices = {this.state.filteredServices}
                                  FilterServices = {this.filterServices}
                                  addService = {this.addService}
                                  UpdateQuestions = {this.updateQuestions}
                                  RemoveFromServiceList = {this.removeFromServiceList}
                                  UpdateProviderInfo = {this.updateProviderInfo}/>;


}

export default ServiceProviderNavigatorContainer