import React from 'react'

const ServiceDetails = ({services, service, setService, cancel, selectService, createService, updateService, deleteService, redirect}) =>
    <div>
        <div>
            <h3>Service Details</h3>
            <select
                value={service.id}
                onChange={(e) => selectService(e.target.value)}
                className="form-control">
                <option value={-1} key={-1}>New Service</option>
                {
                    services
                        .map(service =>
                            <option
                                value={service.id}
                                key={service.id}>
                                {service.title}
                            </option>
                        )
                }
            </select>
            <label>title</label><br/>
            <input onChange={(e) =>
                setService({
                    service: {
                        id: service.id,
                        title: e.target.value,
                        description: service.description
                    }
                })} className="form-control"
                   value={service.title}/>
            <label>description</label>
            <input onChange={(e) =>
                setService(
                    {
                        service: {
                            id: service.id,
                            title: service.title,
                            description: e.target.value,
                        }
                    })} className="form-control"
                   value={service.description}/>
        </div>
        <div>
            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
            <button className="btn btn-danger" onClick={
                () => {
                    deleteService().then(window.setTimeout(redirect("/admin/services/"), 500))
                }
            }>Delete Service
            </button>
            <button className="btn btn-primary" onClick={
                () => {
                    createService().then(window.setTimeout(redirect("/admin/services/"), 500))
                }
            }>Add Service
            </button>
            <button className="btn btn-success" onClick={
                () => {
                    updateService().then(window.setTimeout(redirect("/admin/services/"), 500))
                }
            }>Update Service
            </button>
        </div>
    </div>

export default ServiceDetails