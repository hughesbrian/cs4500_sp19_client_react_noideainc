import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: []
        }
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers
                })
            )
    }

    render() {
        console.log(this.state.serviceAnswers)
        return(
            <div>
                <h3>Service Answers</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswers =>
                                <tr key={serviceAnswers.id}>
                                    <td>{serviceAnswers.id}</td>
                                    <td>{serviceAnswers.choiceAnswer}</td>
                                    <td>{serviceAnswers.trueFalseAnswer +' '}</td>
                                    <td>{serviceAnswers.maxRangeAnswer}</td>
                                    <td>{serviceAnswers.minRangeAnswer}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceAnswers