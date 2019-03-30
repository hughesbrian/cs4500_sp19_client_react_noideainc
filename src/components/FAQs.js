import React from 'react'
import { Button } from 'react-bootstrap';
import '../css/Faqs.scss'
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

// Refactor Stateful Components as Stateless
const FAQs = ({title, question, filtered, faqs, updateTitle, updateQuestion, createFAQ, 
    editFAQ, deleteFAQ, moveToEdit, filterFAQs, clearSearch, handlePageClick, changeCountPerPage,
    currentPage, totalPages, totalFaqs}) =>  {

    let searchButton = filtered ? <Button className="buttons searchButton" variant="warning" onClick={clearSearch}><TiTimesOutline /></Button>
        : <Button className="buttons searchButton" variant="warning"onClick={filterFAQs}><IoIosSearch /></Button>

    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        if (number == currentPage) {
            return(
                <li className="page-item active">
                    <a className="page-link" key={number} id={number} onClick={handlePageClick}>{number+1}</a>
                </li>)
        } else {
            return (
                <li className="page-item">
                    <a className="page-link" key={number} id={number} onClick={handlePageClick}>{number+1}</a>
                </li>
            )
        }
    })

    let renderNext = (currentPage >= totalPages - 1) ? 
                    <li className="page-item disabled">
                        <a className="page-link next-btn" id="next">Next</a>
                    </li> :
                    <li className="page-item">
                        <a className="page-link next-btn" id="next" onClick={handlePageClick}>Next</a>
                    </li>

    let renderPrev = (currentPage <= 0) ? 
                    <li className="page-item disabled">
                        <a className="page-link prev-btn" id="previous">Previous</a>
                    </li> :
                    <li className="page-item">
                        <a className="page-link prev-btn" id="previous" onClick={handlePageClick}>Previous</a>
                    </li>

    const countOptions = [];
    if (totalFaqs > 10) {
        countOptions.push(10);
    }
    if (totalFaqs > 25) {
        countOptions.push(25);
    }
    if (totalFaqs > 50) {
        countOptions.push(50);
    }
    if (totalFaqs > 100) {
        countOptions.push(100);
    }
    countOptions.push(totalFaqs);

    const renderCountOptions = countOptions.map(countVal => {
        if (countVal == totalFaqs) {
            return (
                <option value={countVal}>All</option>
            )
        } else {
            return (
                <option value={countVal}>{countVal}</option>
            )
        }
    })

    return (
        <div className="faq-component">
            <h3>Frequently Asked Questions</h3>
            <table className="faq-table">
                <tbody>
                    <tr className="table-row">
                        <td className="field title"> FAQ Title </td>
                        <td className="field title"> FAQ Question </td>
                    </tr>
                    <tr className="table-row">
                    <td><input value={title} placeholder="please input title" onChange={updateTitle} className="faqTitle"></input></td>
                    <td><input value={question} placeholder="please input question" onChange={updateQuestion} className="faqQuestion"></input></td>
                        <td className="operation">
                            <Button onClick={createFAQ} className="buttons create-btn" variant="primary"><TiPlusOutline /></Button>
                            <Button onClick={editFAQ} className="buttons edit-btn" variant="info"><TiTickOutline /></Button>
                        </td>
                    </tr>

                    {
                        faqs.map(faq =>
                            <tr className="faq-row" key={faq.id}>
                                <td className="faq-title"><a href={"/admin/faqs/" + faq.id}>
                                    {faq.title}</a></td>
                                <td className="faq-question">{faq.question}</td>
                                <td className="del-edit">
                                    <Button onClick={() => deleteFAQ(faq.id)} className="buttons delete-btn" variant="danger"> <TiTimesOutline/> </Button>
                                    <Button onClick={() => moveToEdit(faq)} className="buttons select-btn" variant="primary"><TiEdit /></Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="table-bottom">
                <nav className="page-nav" aria-label="Page navigation example">
                    <select id="inputState" className="form-control" onChange={changeCountPerPage}>
                        {renderCountOptions}
                    </select>
                    <ul className="pagination">
                        {renderPrev}
                        {renderPageNumbers}
                        {renderNext}
                    </ul>
                </nav>
                {searchButton}
            </div>
        </div>)
}

export default FAQs
