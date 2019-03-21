import React from 'react'

const ServiceCategories = ({page, count, totalPages, serviceCategories,
                            serviceCategory, updateForm, createServiceCategory,
                            deleteServiceCategory, selectServiceCategory,
                            updateServiceCategory, setPageSelect,
                            setPagePagination}) =>
    <div>
        <h3>Service Categories</h3>
        <table className="table">
            <tbody>
            <tr>
                <td>
                    <b>Title</b>
                </td>
            </tr>
            <tr>
                <td>
                    <input
                        onChange={e => updateForm(e)}
                        value={serviceCategory.title}></input>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={createServiceCategory}>Add</button>
                    <button className="btn btn-success" onClick={updateServiceCategory}>Update</button>
                </td>
            </tr>
            {
                serviceCategories.map(sc =>
                    <tr key={sc.id}>
                        <td>{sc.title}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteServiceCategory(sc.id)}>
                            Delete
                        </button>
                        <button className="btn btn-primary" onClick={() => selectServiceCategory(sc.id)}>
                            Edit
                        </button>
                        </td>
                    </tr>
                )
            }
            <tr>
                <td>
                    <div className="row">
                        <div className="col-3">
                            <select
                                id="select-page"
                                value={page}
                                onChange={setPageSelect}
                                className="form-control">
                                {
                                    [...Array(totalPages).keys()].map(x =>
                                        <option key={x} value={x}>{x + 1}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-9">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="page-link"
                                                onClick={() => setPagePagination(page - 1)}>
                                            Previous
                                        </button>
                                    </li>
                                    {
                                        [...Array(totalPages).keys()].map(x =>
                                            <li key={x} className="page-item">
                                                <button className="page-link"
                                                        onClick={() => setPagePagination(x)}>
                                                    {x + 1}
                                                 </button>
                                            </li>
                                        )
                                    }
                                    <li className="page-item">
                                        <button className="page-link"
                                                onClick={() => setPagePagination(page + 1)}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </td>
                <td>
                    {/* just for alignment */}
                </td>
            </tr>
            </tbody>
        </table>
    </div>

export default ServiceCategories
