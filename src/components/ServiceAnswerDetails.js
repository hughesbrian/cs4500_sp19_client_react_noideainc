import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceAnswers: [],
            answer: {
                choiceAnswer: this.props.match.params.choiceAnswer,
                id: this.props.match.params.id,
                trueFalseAnswer: this.props.match.params.trueFalseAnswer,
                minRangeAnswer: this.props.match.params.minRangeAnswer,
                maxRangeAnswer: this.props.match.params.maxRangeAnswer
            },
            createAnswer:{
                choiceAnswer: '',
                id: '',
                trueFalseAnswer: '',
                minRangeAnswer: '',
                maxRangeAnswer: ''
            },

            serviceQuestions : [],
            serviceQuestion: {
                question: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.findAllServiceAnswers()
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions => {
                    this.setState({
                        serviceQuestions: serviceQuestions,
                        serviceQuestion: serviceQuestions[0]
                    })
                }
            )
    }
    findAllServiceAnswers = () =>
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers => {
                    this.props.history.push("/admin/service-answers/" + serviceAnswers[0].id)
                    this.setState({
                        serviceAnswers: serviceAnswers,
                        answer: serviceAnswers[0]
                    })
                }
            )
    selectServiceAnswer = id =>
        this.serviceAnswerService
            .findServiceAnswerById(id)
            .then(answer => {
                    this.props.history.push("/admin/service-answers/" + id)
                    this.setState({
                        answer: answer
                    })
                }
            )

    updateMinValue = e =>
        this.setState({
            answer: {
                choiceAnswer: this.state.answer.choiceAnswer,
                trueFalseAnswer: this.state.answer.trueFalseAnswer,
                minRangeAnswer: e.target.value,
                maxRangeAnswer: this.state.answer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })

    updateChoiceAnswer = e =>
        this.setState({
            answer: {
                choiceAnswer: e.target.value,
                trueFalseAnswer: this.state.answer.trueFalseAnswer,
                minRangeAnswer: this.state.answer.minRangeAnswer,
                maxRangeAnswer: this.state.answer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })

    updateMaxValue = e =>
        this.setState({
            answer: {
                choiceAnswer: this.state.answer.choiceAnswer,
                trueFalseAnswer: this.state.answer.trueFalseAnswer,
                minRangeAnswer: this.state.answer.minRangeAnswer,
                maxRangeAnswer: e.target.value,
                id: this.state.answer.id
            }
        })

    updateTrueFalse = e =>
        this.setState({
            answer: {
                choiceAnswer: this.state.answer.choiceAnswer,
                trueFalseAnswer: e.target.value,
                minRangeAnswer: this.state.answer.minRangeAnswer,
                maxRangeAnswer: this.state.answer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })

    updateNewMinValue = e =>
        this.setState({
            createAnswer: {
                choiceAnswer: this.state.createAnswer.choiceAnswer,
                trueFalseAnswer: this.state.createAnswer.trueFalseAnswer,
                minRangeAnswer: e.target.value,
                maxRangeAnswer: this.state.createAnswer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })

    updateNewChoiceAnswer = e =>
        this.setState({
            createAnswer: {
                choiceAnswer: e.target.value,
                trueFalseAnswer: this.state.createAnswer.trueFalseAnswer,
                minRangeAnswer: this.state.createAnswer.minRangeAnswer,
                maxRangeAnswer: this.state.createAnswer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })

    updateNewMaxValue = e =>
        this.setState({
            createAnswer: {
                choiceAnswer: this.state.createAnswer.choiceAnswer,
                trueFalseAnswer: this.state.createAnswer.trueFalseAnswer,
                minRangeAnswer: this.state.createAnswer.minRangeAnswer,
                maxRangeAnswer: e.target.value,
                id: this.state.answer.id
            }
        })

    updateNewTrueFalse = e =>
        this.setState({
            createAnswer: {
                choiceAnswer: this.state.createAnswer.choiceAnswer,
                trueFalseAnswer: e.target.value,
                minRangeAnswer: this.state.createAnswer.minRangeAnswer,
                maxRangeAnswer: this.state.createAnswer.maxRangeAnswer,
                id: this.state.answer.id
            }
        })



    selectServiceQuestion = id =>
        this.serviceQuestionService
            .findServiceQuestionById(id)
            .then(serviceQuestion => {
                this.setState({
                    serviceQuestion: serviceQuestion
                })
            }
            )

    createServiceAnswer = () =>
        this.serviceAnswerService
            .createServiceAnswer(this.state.createAnswer)
            .then(this.findAllServiceAnswers())
    deleteServiceAnswer = id =>
        this.serviceAnswerService
            .deleteServiceAnswer(id)
            .then(this.findAllServiceAnswers())
    updateServiceAnswer = () =>
        this.serviceAnswerService.updateServiceAnswer(this.state.answer)
    render() {
        return(
            <div>
                <h3>Service Answer Details</h3>
                <select
                    value={this.state.answer.id}
                    onChange={(e) => this.selectServiceAnswer(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceAnswers
                            .map(answer =>
                                <option
                                    value={answer.id}
                                    key={answer.id}>
                                    {answer.id}
                                </option>

                            )

                    }
                </select>
                <label>Answer ID</label><br/>
                <input
                    onChange = {(e) => e }
                    className="form-control"
                    value={this.state.answer.id}/>
                <label>Answer minAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateMinValue(e)}
                    className="form-control"
                    value={this.state.answer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateMaxValue(e)}
                    className="form-control"
                    value={this.state.answer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateChoiceAnswer(e)}
                    className="form-control"
                    value={this.state.answer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateTrueFalse(e)}
                    className="form-control"
                    value={this.state.answer.trueFalseAnswer}/>

                <button onClick={() => this.deleteServiceAnswer(this.state.answer.id)}>
                    Delete
                </button>
                <button onClick={this.updateServiceAnswer}>
                    Update
                </button>
                <h3>Service Question Details</h3>
                <select
                    value={this.state.serviceQuestion.id}
                    onChange={(e) => this.selectServiceQuestion(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <option
                                    value={serviceQuestion.id}
                                    key={serviceQuestion.id}>
                                    {serviceQuestion.question}
                                </option>
                            )
                    }
                </select>
                <label>Answer minAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateNewMinValue(e)}
                    className="form-control"
                    value={this.state.createAnswer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateNewMaxValue(e)}
                    className="form-control"
                    value={this.state.createAnswer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateNewChoiceAnswer(e)}
                    className="form-control"
                    value={this.state.createAnswer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => this.updateNewTrueFalse(e)}
                    className="form-control"
                    value={this.state.createAnswer.trueFalseAnswer}/>
                <button onClick={this.createServiceAnswer}>
                    Create
                </button>
            </div>

        )
    }
}

export default ServiceAnswerDetails