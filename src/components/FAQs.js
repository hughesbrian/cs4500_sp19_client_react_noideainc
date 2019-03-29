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
const FAQs = ({title, question, filtered, faqs, updateTitle, updateQuestion, createFAQ, 
    editFAQ, deleteFAQ, moveToEdit, filterFAQs, clearSearch, changeCountPerPage,
    renderPageNumbers, renderNext, renderPrev, renderCountOptions}) =>  {

let searchButton = filtered ? <Button className="buttons searchButton" variant="warning" onClick={clearSearch}><TiTimesOutline /></Button>
    : <Button className="buttons searchButton" variant="warning"onClick={filterFAQs}><IoIosSearch /></Button>
    
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
          
                {/* {
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
                } */}
            </tbody>
        </table>
        <div className="table-bottom">
            <nav className="page-nav" aria-label="Page navigation example">
                <select id="inputState" className="form-control" onChange={changeCountPerPage}>
                    {renderCountOptions}
                </select>
                <ul className="pagination">
                    {/* {renderPrev()} */}
                    {renderPageNumbers}
                    {/* {renderNext()} */}
                </ul>
            </nav>
            {searchButton}
        </div>
    </div>)
}

export default FAQs
