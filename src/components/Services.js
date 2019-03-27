import React from 'react'

const Services = ({services, editingService, setEditingService, deleteService, createService, updateService, saveService}) =>
    <div>
        <h3>Services</h3>

        <table className="table">
            <tbody>
            <tr>
                <td><input onChange={(e) =>
                    setEditingService({
                        editingService: {
                            id: editingService.id,
                            title: e.target.value,
                            description: editingService.description
                        }
                    })} className="form-control title-edit-field"
                           value={editingService.titile}/></td>
                <td><input onChange={(e) =>
                    setEditingService({
                        editingService: {
                            id: editingService.id,
                            title: editingService.title,
                            description: e.target.value
                        }
                    })} className="form-control"
                           value={editingService.description}/></td>
                
                <td>
                    <button className="btn btn-success save-user-btn" onClick={() => {
                        saveService(editingService, createService, updateService)
                    }}>Save
                    </button>
                    <button className="btn btn-warning" onClick={() => {
                        setEditingService({
                            editingService: {
                                title: '',
                                description: ''
                            }
                        })
                    }}>Clear
                    </button>
                </td>
            </tr>
            {
                services.map(service =>
                    <tr key={service.id}>
                        <td>{service.title}</td>
                        <td>{service.description}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => {
                                editingService = service
                            }}
                            >Edit
                            </button>
                            <button className="btn btn-danger" onClick={
                                () => deleteService(service)
                            }>Delete
                            </button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>;

export default Services