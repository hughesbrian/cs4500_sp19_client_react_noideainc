import React from 'react'
import FAQService from '../services/FAQService'
import FAQs from '../components/FAQs'
import { Button } from 'react-bootstrap';
import { TiTimesOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

class FAQContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            faqId: 0,
            title: "",
            question: "",
            filtered: false
            // variables for pagination
            // currentPage: 0,
            // countPerPage: 10,
            // totalPages: 0,
            // totalFaqs: 0
        }
        // this.handlePageClick = this.handlePageClick.bind(this);
        // this.changeCountPerPage = this.changeCountPerPage.bind(this);
    }

    componentDidMount() {
        this.findAllFAQs()
    }

    findAllFAQs = () => {
        // pagination will rewrite the fetch whole FAQs
        this.faqService.findAllFAQs()
        .then(response => {
            this.setState({
                faqs: response
            })
        })
    }

    moveToEdit = (faq) => {
        this.setState({
            faqId: faq.id,
            title: faq.title,
            question: faq.question
        })
    }

    updateTitle = (e) => {
          this.setState({title : e.target.value})
    }

    updateQuestion = (e) => {
          this.setState({question : e.target.value})
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
                    // clean the two inputs
                    this.setState({
                        title: "",
                        question: ""
                    })
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

    render = () =>
        <FAQs
              title={this.state.title}
              question={this.state.question}
              faqs={this.state.faqs}
              updateTitle={this.updateTitle}
              updateQuestion={this.updateQuestion}
              createFAQ={this.createFAQ}
              editFAQ={this.editFAQ}
              deleteFAQ={this.deleteFAQ}
              moveToEdit={this.moveToEdit}
              searchButton={this.searchButton}
        />
}


export default FAQContainer
