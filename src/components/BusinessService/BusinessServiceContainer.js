import ServiceProviderFilter from '../SearchProviders/ServiceProviderFilter'

import React from "react";
import ServiceProviderNavigator from "../SearchProviders/ServiceProviderNavigator";
import serviceCategories from '../../test/MockData/ServiceCategories.mock'
import ServiceSearchService from "../../services/ServiceSearchService";
import ServiceQuestionService from '../../services/ServiceQuestionService';
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
        {/* SERVICE SELECTED HARD CODED FOR NOW */}
        this.service = 123
        this.state = {
            providers: [],
            questions: [],
            criteria: [],
            zip: "",
            services: [],
            businessServices: []
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

        this.serviceService.findAllServices().then((all_services) => {
            this.setState({
                services: all_services
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

    addService = e =>
    {
        console.log(e)
        for(var i = 0; i < this.services.length; i++){
            if(e == this.services[i].id){
                this.businessServices.push(this.services[i])
            }
            console.log(this.businessServices)
        }
    }


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
                                  BusinessServices = {this.state.businessServices}
                                  FilterServices = {this.filterServices}
                                  addService = {this.addService}/>;


}

export default ServiceProviderNavigatorContainer