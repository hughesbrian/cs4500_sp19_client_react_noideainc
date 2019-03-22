import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import '../css/Faqs.scss'
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";

// Refactor Stateful Components as Stateless
const FAQs = ({title, question, faqs, updateTitle, updateQuestion, createFAQ, editFAQ, 
    deleteFAQ, moveToEdit, searchButton, currentPage, totalPages, 
    totalFaqs, handlePageClick, changeCountPerPage}) => {

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

    const renderNext = () => {
        if (currentPage >= totalPages - 1) {
            return (
                <li className="page-item disabled">
                    <a className="page-link" id="next">Next</a>
                </li>
            )
        } else if (currentPage < totalPages - 1) {
            return (
                <li className="page-item">
                    <a className="page-link" id="next" onClick={handlePageClick}>Next</a>
                </li>
            )
        }
    }

    const renderPrev = () => {
        if (currentPage <= 0) {
            return(
            <li className="page-item disabled">
                <a className="page-link" id="previous">Previous</a>
            </li>)
        } else if (currentPage > 0) {
            return (
            <li className="page-item">
                <a className="page-link" id="previous" onClick={handlePageClick}>Previous</a>
            </li>)
        }
    }

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
            <div className="table-bottom">
                <nav className="page-nav" aria-label="Page navigation example">
                    <select id="inputState" className="form-control" onChange={changeCountPerPage}>
                        {renderCountOptions}
                    </select>
                    <ul className="pagination">
                        {renderPrev()}
                        {renderPageNumbers}
                        {renderNext()}
                    </ul>
                </nav>
                {searchButton()}
            </div>
        </div>
    )}

export default FAQs
