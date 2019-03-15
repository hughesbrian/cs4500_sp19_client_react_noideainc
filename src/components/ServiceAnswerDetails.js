import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            answer: {
                choiceAnswer: '',
                id: this.props.match.params.id,
                trueFalseAnswer: null,
                minAnswer: 0,
                maxAnswer: 0
            }
        }
    }
    componentDidMount() {
        this.findAllServiceAnswers()
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

    updateForm = e =>
        this.setState({
            answer: {
                choiceAnswer: e.target.value,
                trueFalseAnswer: e.target.value,
                minAnswer: e.target.value,
                maxAnswer: e.target.value,
                id: this.state.answer.id
            }
        })

    createServiceAnswer = () =>
        this.serviceAnswerService
            .createServiceAnswer(this.state.answer)
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
                <label>Answer</label><br/>
                <input
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.answer.id}/>
                <button onClick={this.createServiceAnswer}>
                    Create
                </button>
                <button onClick={() => this.createServiceAnswer(this.state.answer.id)}>
                    Delete
                </button>
                <button onClick={this.updateServiceAnswer}>
                    Update
                </button>
            </div>
        )
    }
}

export default ServiceAnswerDetails