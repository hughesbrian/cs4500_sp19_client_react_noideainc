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
}

export default FAQDetails