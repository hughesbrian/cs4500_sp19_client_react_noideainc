import React from 'react'
import FAQService from '../services/FAQService'
import { Button } from 'react-bootstrap';
import '../css/Faqs.css'
import { IoIosSearch } from "react-icons/io";
import { TiTimesOutline } from "react-icons/ti";

class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            title: "",
            question: "",
            filtered: false
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                this.setState({
                    faqs: faqs
                })
            }
        )
    }

    filterFAQs = async () => {
        const { title, question, filtered } = this.state;
        if (title === '' || question === '') {
            alert('Please enter both title and question')
        } else {
            this.setState({filtered : true})
            try {
                let res = await this.faqService.findFiltered(title, question);
                this.setState({
                    faqs : res
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    searchButton = () => {
        if(this.state.filtered) {
            return <Button className="buttons searchButton" variant="warning" onClick={this.clearSearch}><TiTimesOutline /></Button>
        } else {
            return <Button className="buttons searchButton" variant="warning" 
            onClick={this.filterFAQs}><IoIosSearch /></Button>
        }
    }

    clearSearch = () => {
        this.setState({
            filtered : false,
            title: "",
            question: ""
        })
        this.componentDidMount()
    }

    updateTitle = (e) => {
        this.setState({title : e.target.value})
    }

    updateQuestion = (e) => {
        this.setState({question : e.target.value})
    }

    render() {
        return(
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td><input value={this.state.title} placeholder="title" onChange={this.updateTitle} className="field title"></input></td>
                        <td><input value={this.state.question} placeholder="question" onChange={this.updateQuestion} className="field question"></input></td>
                    </tr>
                    {
                        this.state.faqs
                            .map(faq =>
                                <tr key={faq.id}>
                                    <td>{faq.title}</td>
                                    <td>{faq.question}</td>
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

export default FAQs