import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import '../css/Faqs.scss'
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

// Refactor Stateful Components as Stateless
const FAQs = ({title, question, faqs, updateTitle, updateQuestion, createFAQ, editFAQ, deleteFAQ, moveToEdit, searchButton}) =>
    <div className="faq-component">
        <h3>Frequently Asked Questions</h3>
        <table className="faq-table">
            <tbody>
                <tr className="table-row">
                    <td className="field title"> FAQ Title </td>
                    <td className="field title"> FAQ Question </td>
                </tr>
                <tr className="table-row">
                <td><input value={title} placeholder="please input title" onChange={updateTitle} className="field"></input></td>
                <td><input value={question} placeholder="please input question" onChange={updateQuestion} className="field"></input></td>
                    <td className="operation">
                        <Button onClick={createFAQ} className="buttons" variant="primary"><TiPlusOutline /></Button>
                        <Button onClick={editFAQ} className="buttons" variant="info"><TiTickOutline /></Button>
                    </td>
                </tr>
                {
                    faqs.map(faq =>
                        <tr className="table-row" key={faq.id}>
                            <td><Link to={"/admin/faqs/" + faq.id}>
                                {faq.title}</Link></td>
                            <td>{faq.question}</td>
                            <td>
                                <Button onClick={() => deleteFAQ(faq.id)} className="buttons" variant="danger"> <TiTimesOutline/> </Button>
                                <Button onClick={() => moveToEdit(faq)} className="buttons" variant="primary"><TiEdit /></Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        {searchButton()}
        {/* <div className="table-bottom">
            <nav className="page-nav" aria-label="Page navigation example">
                <select id="inputState" className="form-control" value={this.state.value} onChange={this.changeCountPerPage}>
                    {renderCountOptions}
                </select>
                <ul className="pagination">
                {renderPrev()}
                {renderPageNumbers}
                {renderNext()}
                </ul>
            </nav>
        </div> */}
    </div>



// class FAQs extends React.Component {
//     constructor(props) {
//         super(props)
//         this.faqService = FAQService.getInstance()
//         this.state = {
//             faqs: [],
//             faqId: 0,
//             title: "",
//             question: "",
//             filtered: false,
//             // variables for pagination
//             currentPage: 0,
//             countPerPage: 10,
//             totalPages: 0,
//             totalFaqs: 0
//         }
//         this.handlePageClick = this.handlePageClick.bind(this);
//         this.changeCountPerPage = this.changeCountPerPage.bind(this);
//     }
//     componentDidMount() {
//         this.faqService
//             .findPagedFAQs(this.state.currentPage, this.state.countPerPage)
//             .then(data => {
//                 this.props.history.push("/admin/faqs/page/" + this.state.currentPage + "/count/" + this.state.countPerPage)
//                 this.setState({
//                     faqs: data.content,
//                     countPerPage: data.pageable.pageSize,
//                     currentPage: data.pageable.pageNumber,
//                     totalPages: data.totalPages,
//                     totalFaqs: data.totalElements
//                 })
//             })
//     }

//     filterFAQs = async () => {
//         const { title, question, filtered } = this.state;
//         if (title === '' || question === '') {
//             alert('Please enter both title and question')
//         } else {
//             this.setState({filtered : true})
//             try {
//                 let res = await this.faqService.findFiltered(title, question);
//                 this.setState({
//                     faqs : res
//                 })
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }

//     searchButton = () => {
//         if(this.state.filtered) {
//             return <Button className="buttons searchButton" variant="warning" onClick={this.clearSearch}><TiTimesOutline /></Button>
//         } else {
//             return <Button className="buttons searchButton" variant="warning"
//             onClick={this.filterFAQs}><IoIosSearch /></Button>
//         }
//     }

//     clearSearch = () => {
//         this.setState({
//             filtered : false,
//             title: "",
//             question: ""
//         })
//         this.componentDidMount()
//     }

//     updateTitle = (e) => {
//         this.setState({title : e.target.value})
//     }

//     updateQuestion = (e) => {
//         this.setState({question : e.target.value})
//     }

//     moveToEdit = (faq) => {
//         this.setState({
//             faqId: faq.id,
//             title: faq.title,
//             question: faq.question,
//         })
//     }

//     createFAQ = () => {
//         // alert("create FAQ")
//         console.log("create FAQ")
//         if (this.state.question && this.state.title) {
//             this.faqService
//             .createFAQ({
//                 question: this.state.question,
//                 title: this.state.title
//             }).then(
//                 (response) => {
//                     this.componentDidMount()
//                 }
//             ).catch(function (error) {
//                 console.log(error)
//                 alert("Failed to create a new FAQ");
//             });
//         } else {
//             alert("please input title or question");
//         }
//     }

//     editFAQ = () => {
//         // alert("edit FAQ")
//         console.log("edit FAQ")
//         if (this.state.question && this.state.title && this.state.faqId) {
//             this.faqService
//             .editFAQ({
//                 id: this.state.faqId,
//                 question: this.state.question,
//                 title: this.state.title
//             }).then(
//                 (response) => {
//                     this.componentDidMount()
//                 }
//             ).catch(function (error) {
//                 console.log(error)
//                 alert("Failed to edit this FAQ");
//             });
//         } else {
//             alert("please input title or question or select FAQ");
//         }
//     }

//     deleteFAQ = id => {
//         console.log("delte FAQ: " + id)
//         this.faqService
//         .deleteFAQ(id).then(
//             (response) => {
//                 this.componentDidMount()
//             }
//         ).catch(function (error) {
//             console.log(error)
//             alert("Failed to delete this FAQ");
//         });
//     }

//     // The follwoing functions deal with pagination
//     handlePageClick(event) {
//         const pageId = event.target.id
//         let newPageNum = pageId
//         if (pageId == "previous") {
//             newPageNum = this.state.currentPage - 1
//         } else if (pageId == "next") {
//             newPageNum = this.state.currentPage + 1
//         }
//         this.faqService
//             .findPagedFAQs(newPageNum, this.state.countPerPage)
//             .then(data => {
//                 this.props.history.push("/admin/faqs/page/" + newPageNum + "/count/" + this.state.countPerPage)
//                 this.setState({
//                     faqs: data.content,
//                     countPerPage: data.pageable.pageSize,
//                     currentPage: data.pageable.pageNumber
//                 })
//             })
//     }

//     changeCountPerPage(event) {
//         const newCount = event.target.value
//         let newPageNum = Math.ceil(this.state.totalPages / this.state.totalFaqs) - 1

//         this.faqService
//             .findPagedFAQs(newPageNum, newCount)
//             .then(data => {
//                 this.props.history.push("/admin/faqs/page/" + newPageNum + "/count/" + newCount)
//                 this.setState({
//                     faqs: data.content,
//                     countPerPage: data.pageable.pageSize,
//                     currentPage: newPageNum,
//                     totalPages: data.totalPages
//                 })
//             })
//     }

//     render() {
//         // Logic for displaying page numbers
//         const pageNumbers = [];
//         for (let i = 0; i < this.state.totalPages; i++) {
//             pageNumbers.push(i);
//         }

//         const renderPageNumbers = pageNumbers.map(number => {
//             if (number == this.state.currentPage) {
//                 return(
//                     <li className="page-item active">
//                         <a className="page-link" key={number} id={number} onClick={this.handlePageClick}>{number+1}</a>
//                     </li>)
//             } else {
//                 return (
//                     <li className="page-item">
//                         <a className="page-link" key={number} id={number} onClick={this.handlePageClick}>{number+1}</a>
//                     </li>
//                 )
//             }
//         })

//         const renderNext = () => {
//             if (this.state.currentPage >= this.state.totalPages - 1) {
//                 return (
//                     <li className="page-item disabled">
//                         <a className="page-link" id="next">Next</a>
//                     </li>
//                 )
//             } else if (this.state.currentPage < this.state.totalPages - 1) {
//                 return (
//                     <li className="page-item">
//                         <a className="page-link" id="next" onClick={this.handlePageClick}>Next</a>
//                     </li>
//                 )
//             }
//         }

//         const renderPrev = () => {
//             if (this.state.currentPage <= 0) {
//                 return(
//                 <li className="page-item disabled">
//                     <a className="page-link" id="previous">Previous</a>
//                 </li>)
//             } else if (this.state.currentPage > 0) {
//                 return (
//                 <li className="page-item">
//                     <a className="page-link" id="previous" onClick={this.handlePageClick}>Previous</a>
//                 </li>)
//             }
//         }

//         const countOptions = [];
//         if (this.state.totalFaqs > 10) {
//             countOptions.push(10);
//         }
//         if (this.state.totalFaqs > 25) {
//             countOptions.push(25);
//         }
//         if (this.state.totalFaqs > 50) {
//             countOptions.push(50);
//         }
//         if (this.state.totalFaqs > 100) {
//             countOptions.push(100);
//         }
//         countOptions.push(this.state.totalFaqs);

//         const renderCountOptions = countOptions.map(countVal => {
//             if (countVal == this.state.totalFaqs) {
//                 return (
//                     <option value={countVal}>All</option>
//                 )
//             } else {
//                 return (
//                     <option value={countVal}>{countVal}</option>
//                 )
//             }
//         })

//         return(
//             <div className="faq-component">
//                 <h3>Frequently Asked Questions</h3>
//                 <table className="faq-table">
//                     <tbody>
//                     <tr className="table-row">
//                         <td className="field title"> FAQ Title </td>
//                         <td className="field title"> FAQ Question </td>
//                     </tr>
//                     <tr className="table-row">
//                         <td><input value={this.state.title} placeholder="please input title" onChange={this.updateTitle} className="field"></input></td>
//                         <td><input  value={this.state.question} placeholder="please input question" onChange={this.updateQuestion} className="field"></input></td>
//                         <td className="operation"><Button onClick={this.createFAQ} className="buttons" variant="primary"><TiPlusOutline /></Button>
//                           <Button onClick={this.editFAQ} className="buttons" variant="info"><TiTickOutline /></Button></td>
//                     </tr>
//                     {
//                         this.state.faqs.map(faq =>
//                             <tr className="table-row" key={faq.id}>
//                                 <td><Link to={"/admin/faqs/" + faq.id}>
//                                     {faq.title}</Link></td>
//                                 <td>{faq.question}</td>
//                                 <td>
//                                     <Button onClick={() => this.deleteFAQ(faq.id)} className="buttons" variant="danger"> <TiTimesOutline/> </Button>
//                                     <Button onClick={() => this.moveToEdit(faq)} className="buttons" variant="primary"><TiEdit /></Button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                     </tbody>
//                 </table>
//                 <div className="table-bottom">
//                     <nav className="page-nav" aria-label="Page navigation example">
//                         <select id="inputState" className="form-control" value={this.state.value} onChange={this.changeCountPerPage}>
//                             {renderCountOptions}
//                         </select>
//                         <ul className="pagination">
//                         {renderPrev()}
//                         {renderPageNumbers}
//                         {renderNext()}
//                         </ul>
//                     </nav>
//                     {this.searchButton()}
//                 </div>
//             </div>
//         )
//     }
// }

export default FAQs
