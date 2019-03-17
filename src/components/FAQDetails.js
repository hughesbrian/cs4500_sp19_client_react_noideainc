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
                id:  this.props.match.params.id
            }
        }
    }
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                    this.props.history.push("/admin/faqs/" + this.state.faq.id)
                    this.setState({
                        faqs: faqs,
                        faq: faqs.find( (item) => 
                            item.id == this.state.faq.id )
                    })
                }
            )
    }
    selectFAQ = id => {
        this.faqService
            .findFAQById(id)
            .then(faq => {
                    this.props.history.push("/admin/faqs/" + id)
                    this.setState({
                        faq: faq
                    })
                }
            )
        }
    render() {
        return(
            <div>
                <h3>Frequently Asked Questions Details</h3>
                <select
                    value={this.state.faq.id}
                    onChange={(e) => this.selectFAQ(e.target.value)}
                    className="form-control">
                    {
                        this.state.faqs
                            .map(faq =>
                                <option
                                    value={faq.id}
                                    key={faq.id}>
                                    {faq.id}
                                </option>
                            )
                    }
                </select>
                <label>FAQ Title</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faq.title}/>
            </div>
        )
    }
}

export default FAQDetails