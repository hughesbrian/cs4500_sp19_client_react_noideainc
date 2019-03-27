import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
import ServiceQuestionService from '../services/ServiceQuestionService'
import ServiceAnswerDetails from './ServiceAnswerDetails'
class ServiceAnswerDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceAnswerService = ServiceAnswerService.getInstance();
        this.serviceQuestionService = ServiceQuestionService.getInstance();
        this.state = {
            serviceAnswers: [],
            answer: {
                choiceAnswer: '',
                id: 0,
                trueFalseAnswer: '',
                minRangeAnswer: '',
                maxRangeAnswer: ''
            },
            createAnswer:{
                choiceAnswer: '',
                id: 0,
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
        this.findAllServiceAnswers();
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
            //this.props.history.push("/admin/service-answers/" + serviceAnswers[0].id);
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
    //this.props.history.push("/admin/service-answers/" + id);
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
    .then(this.findAllServiceAnswers());
deleteServiceAnswer = id =>
this.serviceAnswerService
    .deleteServiceAnswer(id)
    .then(this.findAllServiceAnswers());
updateServiceAnswer = () =>
this.serviceAnswerService.updateServiceAnswer(this.state.answer);

render = () => <ServiceAnswerDetails serviceAnswers = {this.state.serviceAnswers}
                answer = {this.state.answer}
                createAnswer = {this.state.createAnswer}
                serviceQuestion = {this.state.serviceQuestion}
                serviceQuestions = {this.state.serviceQuestions}
                findAllServiceAnswer = {this.findAllServiceAnswers}
                selectServiceAnswer = {this.selectServiceAnswer}
                updateMinValue = {this.updateMinValue}
                updateChoiceAnswer = {this.updateChoiceAnswer}
                updateMaxValue = {this.updateMaxValue}
                updateTrueFalse = {this.updateTrueFalse}
                updateNewMinValue = {this.updateNewMinValue}
                updateNewChoiceAnswer = {this.updateNewChoiceAnswer}
                updateNewMaxValue = {this.updateNewMaxValue}
                updateNewTrueFalse = {this.updateNewTrueFalse}
                selectServiceQuestion = {this.selectServiceQuestion}
                createServiceAnswer = {this.createServiceAnswer}
                deleteServiceAnswer = {this.deleteServiceAnswer}
                updateServiceAnswer = {this.updateServiceAnswer} />;
}

export default ServiceAnswerDetailsContainer