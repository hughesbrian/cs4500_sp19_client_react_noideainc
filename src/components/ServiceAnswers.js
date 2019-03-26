import React from 'react'
import $ from 'jquery'
import ServiceAnswerService from '../services/ServiceAnswerService'
import ReactPaginate from 'react-paginate';
class ServiceAnswers extends React.Component {

    /*
     l1 = new Array();
     pages = new Array();
     currentPage = 1;
     numPerpage = 5;
     numberOfPages = 1;

     getNumberOfPages() {
         return Math.ceil(this.l1.length / this.numPerpage);
     }

     load(){
         this.numberOfPages = this.getNumberOfPages();
     }

     nextPage() {
         this.currentPage += 1;
     }

     previousPage() {
         this.currentPage -= 1;
     }

     firstPage() {
         this.currentPage = 1;
     }

     lastPage() {
         this.currentPage = this.numberOfPages;
     }*/

    loadCommentsFromServer() {
        $.ajax({
                   url: this.props.url,
                   data: { limit: this.props.perPage, offset: this.state.offset },
                   dataType: 'json',
                   type: 'GET',

                   success: data => {
                       this.setState({
                                         data: data.comments,
                                         pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
                                     });
                   },

                   error: (xhr, status, err) => {
                       console.error(this.props.url, status, err.toString()); // eslint-disable-line
                   },
               });
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
            this.loadCommentsFromServer();
        });
    };

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
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

export default ServiceAnswers