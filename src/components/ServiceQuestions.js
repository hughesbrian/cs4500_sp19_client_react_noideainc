import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
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
                                    }))


    render() {
        return(
            <div>
                <h3>Service Questions</h3>
                <form>
                        <label>
                            <input type="text" name="title" placeholder={"Title"} value={this.state.questionForm.title} onChange={this.handleTitleChange}/>
                        </label>
                        <label>
                            <input type="text" name="question" placeholder={"Question Text"} value={this.state.questionForm.question} onChange={this.handleQuestionChange}/>
                        </label>
                        <label>
                            <input type="text" name="type" placeholder={"Question Type"} value={this.state.questionForm.type} onChange={this.handleTypeChange}/>
                        </label>
                        <label>
                            <input type="text" name="choices" placeholder={"Question Choices"} value={this.state.questionForm.choices} onChange={this.handleChoicesChange}/>
                        </label>
                        <button type="button" onClick={() =>
                                this.createServiceQuestion(this.state.questionForm)
                                    .then(this.updateQuestions)
                                }>
                            CREATE NEW QUESTION
                        </button>
                        <button type="button" onClick={() =>
                                this.updateServiceQuestion(this.state.questionForm)
                                    .then(this.updateQuestions)
                                }>
                            CONFIRM EDIT
                        </button>
                </form>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>{serviceQuestion.title}</td>
                                    <td>{serviceQuestion.question}</td>
                                    <td>{serviceQuestion.type}</td>
                                    <td>{serviceQuestion.choices}</td>
                                    {/* DELETE button, calls delete function then updates state*/}
                                    <td>
                                        <button onClick={() =>
                                            this.deleteServiceQuestion(serviceQuestion.id)
                                                .then(this.updateQuestions)
                                        }>
                                            DELETE
                                        </button>
                                    </td>
                                    {/* UPDATE button, calls update function then updates state*/}
                                    <td>
                                        <button onClick={() =>
                                            this.handleEditClick(serviceQuestion.id, serviceQuestion)
                                        }>
                                            EDIT
                                        </button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceQuestions