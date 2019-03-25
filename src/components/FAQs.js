import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import '../css/Faqs.scss'
import { TiPlusOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTimesOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";

// Refactor Stateful Components as Stateless
const FAQs = ({title, question, faqs, updateTitle, updateQuestion, createFAQ, 
    editFAQ, deleteFAQ, moveToEdit, searchButton, changeCountPerPage,
    renderPageNumbers, renderNext, renderPrev, renderCountOptions}) =>

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

export default FAQs
