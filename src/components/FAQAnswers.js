import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import { Button } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { TiTimesOutline } from "react-icons/ti";

class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            answer: "",
            filtered: false
        }
    }
    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers =>
                this.setState({
                    faqAnswers: faqAnswers
                })
            )
    }

    clearSearch = () => {
        this.setState({
            filtered : false,
            answer: ""
        })
        this.componentDidMount()
    }

    filterFAAs = async () => {
        const { answer, filtered } = this.state;
        if (answer === '') {
            alert('Please enter the answer')
        } else {
            this.setState({ filtered : true })
            try {
                let res = await this.faqAnswerService.findFiltered(answer);
                this.setState({
                    faqAnswers : res
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    updateAnswer = (e) => {
        this.setState({answer : e.target.value})
    }

    searchButton = () => {
        if(this.state.filtered) {
            return <Button className="buttons searchButton" variant="warning" onClick={this.clearSearch}><TiTimesOutline /></Button>
        } else {
            return <Button className="buttons searchButton" variant="warning" 
            onClick={this.filterFAAs}><IoIosSearch /></Button>
        }
    }

    render() {
        return(
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><input value={this.state.answer} placeholder="answer" onChange={this.updateAnswer} className="field answer"></input></td>
                        </tr>
                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <tr key={faqAnswer.id}>
                                    <td>{faqAnswer.question}</td>
                                    <td>{faqAnswer.answer}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <div>
                    {this.searchButton()}
                </div>
            </div>
        )
    }
}

export default FAQAnswers