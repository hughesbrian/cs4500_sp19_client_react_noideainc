import React from 'react'

const ServiceCategoryDetails = ({serviceCategories, serviceCategory, selectServiceCategory,
                                 updateForm, createServiceCategory, deleteServiceCategory,
                                 updateServiceCategory, goBack}) =>
    <div>
        <h3>Service Category Details</h3>
        <select
            value={serviceCategory.id}
            onChange={(e) => selectServiceCategory(e.target.value)}
            className="form-control">
            {
                serviceCategories
                    .map(sc =>
                        <option
                            value={sc.id}
                            key={sc.id}>
                            {sc.title}
                        </option>
                    )
            }
        </select>
        <br/>
        <label>Service Category</label><br/>
        <input
            id="title-input"
            onChange={e => updateForm(e)}
            className="form-control"
            value={serviceCategory.title}/>
        <br/>
        <button className="btn btn-danger" onClick={goBack}>
            Back
        </button>
        <button className="btn btn-primary" onClick={createServiceCategory}>
            Create
        </button>
        <button className="btn btn-danger" onClick={() => deleteServiceCategory(serviceCategory.id)}>
            Delete
        </button>
        <button className="btn btn-success" onClick={updateServiceCategory}>
            Update
        </button>
    </div>

export default ServiceCategoryDetails
