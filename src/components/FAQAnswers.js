import React from 'react'
import {Link} from 'react-router-dom'
import FAQAnswerService from '../services/FAQAnswerService'
import FAQService from '../services/FAQService'
import '../css/Faqs.scss'
import { Button } from 'react-bootstrap';
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            selectFaq: {
                id: 1,
                question: "",
                title: ""
            },
            faqAnswers: [],
            faqAnswerId: 0,
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
        // store all questions here for adding new answer to selet question
        this.faqService
            .findAllFAQs()
            .then(faqs => { 
                this.setState({ 
                    faqs: faqs,
                    selectFaq: faqs[0]
                })}
            )
    }

    selectFAQ = id => {
        this.setState({
            selectFaq: this.state.faqs.find((item) => item.id == id )
        })
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

    moveToEdit = (faqAnswer) => {
        console.log(faqAnswer)
        this.setState({
            faqAnswerId: faqAnswer.id,
            answer: faqAnswer.answer,
            selectFaq: {
                ...this.state.selectFaq,
                id: this.state.faqs.find((item) => item.question == faqAnswer.question ).id
            }
        })
    }
    
    createFAQAnswer = () => {
        // alert("create FAQ Answer")
        console.log("create FAQ Answer")
        // let newAnswer = {
        //     answer: this.state.answer,
        //     frequentlyAskedQuestion: {
        //         id:  this.state.selectFaq.id
        //     }
        // }
        // console.log(newAnswer)
        // if (this.state.answer) {
        //     this.faqAnswerService
        //     .createFAQAnswer(newAnswer).then(
        //         (response) => {
        //             this.componentDidMount()
        //         }
        //     ).catch(function (error) {
        //         console.log(error)
        //         alert("Failed to create a new FAQ");
        //     });
        // } else {
        //     alert("please input title or question");
        // }
    }

    editFAQAnswer = () => {
        // alert("edit FAQ Answer")
        console.log("edit FAQ")
        if (this.state.answer && this.state.faqAnswerId) {
            this.faqAnswerService
            .editFAQAnswer({
                id: this.state.faqAnswerId,
                answer: this.state.answer,
                question: this.state.selectFaq.question
            }).then(
                (response) => {
                    this.componentDidMount()
                }
            ).catch(function (error) {
                console.log(error)
                alert("Failed to edit this FAQ Answer");
            });
        } else {
            alert("please input answer or select question Id");
        }
        // after edit successfully, clear answer
        this.setState({answer: ""})
    }

    deleteFAQAnswer = id => {
        console.log("delte FAQ Answer: " + id)
        this.faqAnswerService
        .deleteFAQAnswer(id).then(
            (response) => {
                this.componentDidMount()
            }
        ).catch(function (error) {
            console.log(error)
            alert("Failed to delete this FAQ Answer");
        });
    }

    render() {
        return(
            <div className="faq-component">
                <h3>FAQ Answers</h3>
                <table className="faq-table">
                    <tbody>
                        <tr className="table-row">
                            <td className="field title"> FAQ Question </td>
                            <td className="field title"> FAQ Answer </td>
                        </tr>
                        <tr className="table-row">
                            <td className="field">
                            <select
                                value={this.state.selectFaq.id}
                                onChange={(e) => this.selectFAQ(e.target.value)}
                                className="form-control">
                                {
                                    this.state.faqs
                                        .map(faq =>  
                                            <option
                                                value={faq.id}
                                                key={faq.id}>
                                                {faq.question}
                                            </option>
                                        )
                                }
                            </select>
                            </td>
                            <td><input value={this.state.answer} placeholder="answer" onChange={this.updateAnswer} className="field"></input></td>
                            <td className="operation"><Button onClick={this.createFAQAnswer} className="buttons" variant="primary"><TiPlusOutline /></Button> 
                            <Button onClick={this.editFAQAnswer} className="buttons" variant="info"><TiTickOutline /></Button></td>
                        </tr>
                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <tr className="table-row" key={faqAnswer.id}>
                                    <td>{faqAnswer.question}</td>
                                    <td><Link to={"/admin/faq-answers/" + faqAnswer.id}>
                                    {faqAnswer.answer}</Link></td>
                                    <td>
                                        <Button onClick={() => this.deleteFAQAnswer(faqAnswer.id)} className="buttons" variant="danger"> <TiTimesOutline/> </Button> 
                                        <Button onClick={() => this.moveToEdit(faqAnswer)} className="buttons" variant="primary"><TiEdit /></Button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <div className="table-bottom">
                    {this.searchButton()}
                </div>
            </div>
        )
    }
}

export default FAQAnswers