import React from 'react'
import FAQService from '../services/FAQService'
import FAQs from '../components/FAQs'

class FAQContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            faqId: 0,
            title: "",
            question: "",
            // filtered: false,
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
        <FAQs faqs={this.state.faqs} 
              createFAQ={this.createFAQ}
              editFAQ={this.editFAQ}
              deleteFAQ={this.deleteFAQ}
              moveToEdit={this.moveToEdit}
        />
}


export default FAQContainer