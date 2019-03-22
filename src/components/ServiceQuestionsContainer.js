import React from 'react';
import ServiceQuestions from './ServiceQuestions';
import ServiceQuestionService from '../services/ServiceQuestionService';

class ServiceQuestionsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            questionForm: {
                title: '',
                question: '',
                type: '',
                choices: ''
            },
            editingQuestion: -1,
            serviceQuestions: []
        }

        this.handleEditClick = this.handleEditClick.bind(this);
    }
    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions
                })
            )
    }

    deleteServiceQuestion = (id) =>
        this.serviceQuestionService
            .deleteQuestion(id);

    createServiceQuestion = (question) =>
        this.serviceQuestionService
            .createQuestion(question);

    updateServiceQuestion = (question) =>
        this.serviceQuestionService
            .updateQuestion(this.state.editingQuestion, question);

    handleTitleChange = (event) =>
        this.setState({
            questionForm: {
                title: event.target.value,
                question: this.state.questionForm.question,
                type: this.state.questionForm.type,
                choices: this.state.questionForm.choices
            }
        });

    handleQuestionChange = (event) =>
        this.setState({
            questionForm: {
                title: this.state.questionForm.title,
                question: event.target.value,
                type: this.state.questionForm.type,
                choices: this.state.questionForm.choices
            }
        });

    handleTypeChange = (event) =>
        this.setState({
            questionForm: {
                title: this.state.questionForm.title,
                question: this.state.questionForm.question,
                type: event.target.value,
                choices: this.state.questionForm.choices
            }
        });

    handleChoicesChange = (event) =>
        this.setState({
            questionForm: {
                title: this.state.questionForm.title,
                question: this.state.questionForm.question,
                type: this.state.questionForm.type,
                choices: event.target.value
            }
        });
    
    handleEditClick = function (id, question) {
        this.updateEditForm(question);
        this.setState({
                editingQuestion: id
            });
        console.log(id);
        console.log(this.state.editingQuestion);
        };

    updateEditForm = (question) =>
        this.setState({
            questionForm: question
        });

    updateQuestions = () => this.serviceQuestionService
                                .findAllServiceQuestions()
                                .then(serviceQuestions =>
                                    this.setState({
                                        serviceQuestions: serviceQuestions
                                    }));

    render = () => <ServiceQuestions questionForm={this.state.questionForm}
                                     editingQuestion={this.state.editingQuestion}
                                     serviceQuestions={this.state.serviceQuestions}
                                     createServiceQuestion={this.createServiceQuestion}
                                     updateServiceQuestion={this.updateServiceQuestion}
                                     deleteServiceQuestion={this.deleteServiceQuestion}
                                     handleEditClick={this.handleEditClick}
                                     handleTitleChange={this.handleTitleChange}
                                     handleQuestionChange={this.handleQuestionChange}
                                     handleTypeChange={this.handleTypeChange}
                                     handleChoicesChange={this.handleChoicesChange}
                                     updateQuestions={this.updateQuestions}/>;
}

export default ServiceQuestionsContainer