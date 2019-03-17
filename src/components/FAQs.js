import React from 'react'
import {Link} from 'react-router-dom'
import FAQService from '../services/FAQService'
import { Button } from 'react-bootstrap';
import '../css/Faqs.scss'
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            faqId: 0,
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

    moveToEdit = (faq) => {
        this.setState({
            faqId: faq.id,
            title: faq.title,
            question: faq.question,
        })
    }

    createFAQ = () => {
        // alert("create FAQ")
        console.log("create FAQ")
        if (this.state.question && this.state.title) {
            this.faqService
            .createFAQ({
                question: this.state.question,
                title: this.state.title
            }).then(
                (response) => {
                    this.componentDidMount()
                }
            ).catch(function (error) {
                console.log(error)
                alert("Failed to create a new FAQ");
            });
        } else {
            alert("please input title or question");
        }
    }

    editFAQ = () => {
        // alert("edit FAQ")
        console.log("edit FAQ")
        if (this.state.question && this.state.title && this.state.faqId) {
            this.faqService
            .editFAQ({
                id: this.state.faqId,
                question: this.state.question,
                title: this.state.title
            }).then(
                (response) => {
                    this.componentDidMount()
                }
            ).catch(function (error) {
                console.log(error)
                alert("Failed to edit this FAQ");
            });
        } else {
            alert("please input title or question or select FAQ");
        }
    }

    deleteFAQ = id => {
        console.log("delte FAQ: " + id)
        this.faqService
        .deleteFAQ(id).then(
            (response) => {
                this.componentDidMount()
            }
        ).catch(function (error) {
            console.log(error)
            alert("Failed to delete this FAQ");
        });
    }

    render() {
        return(
            <div className="faq-component">
                <h3>Frequently Asked Questions</h3>
                <table className="faq-table">
                    <tbody>
                    <tr className="table-row">
                        <td className="field title"> FAQ Title </td>
                        <td className="field title"> FAQ Question </td>
                    </tr>
                    <tr className="table-row">
                        <td><input value={this.state.title} placeholder="please input title" onChange={this.updateTitle} className="field"></input></td>
                        <td><input  value={this.state.question} placeholder="please input question" onChange={this.updateQuestion} className="field"></input></td>
                        <td className="operation"><Button onClick={this.createFAQ} className="buttons" variant="primary"><TiPlusOutline /></Button> 
                          <Button onClick={this.editFAQ} className="buttons" variant="info"><TiTickOutline /></Button></td>
                    </tr>
                    {
                        this.state.faqs.map(faq =>
                            <tr className="table-row" key={faq.id}>
                                <td><Link to={"/admin/faqs/" + faq.id}>
                                    {faq.title}</Link></td>
                                <td>{faq.question}</td>
                                <td>
                                    <Button onClick={() => this.deleteFAQ(faq.id)} className="buttons" variant="danger"> <TiTimesOutline/> </Button> 
                                    <Button onClick={() => this.moveToEdit(faq)} className="buttons" variant="primary"><TiEdit /></Button>
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

export default FAQs