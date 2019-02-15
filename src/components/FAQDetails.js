import React from 'react'
import FAQService from '../services/FAQService'
class FAQDetails extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            faq: {
                choiceAnswer: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                    this.props.history.push("/admin/faqs/" + faqs[0].id)
                    this.setState({
                        faqs: faqs,
                        faq: faqs[0]
                    })
                }
            )
    }
}

export default FAQDetails