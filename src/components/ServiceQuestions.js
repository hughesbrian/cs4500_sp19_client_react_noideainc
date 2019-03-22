import React from 'react'

const ServiceQuestions =({questionForm, editingQuestion, serviceQuestions, createServiceQuestion, updateServiceQuestion, deleteServiceQuestion, handleEditClick, handleTitleChange, handleQuestionChange, handleTypeChange, handleChoicesChange, updateQuestions}) =>
            <div>
                <h3>Service Questions</h3>
                <form>
                        <label>
                            <input type="text" name="title" placeholder={"Title"} value={questionForm.title} onChange={handleTitleChange}/>
                        </label>
                        <label>
                            <input type="text" name="question" placeholder={"Question Text"} value={questionForm.question} onChange={handleQuestionChange}/>
                        </label>
                        <label>
                            <input type="text" name="type" placeholder={"Question Type"} value={questionForm.type} onChange={handleTypeChange}/>
                        </label>
                        <label>
                            <input type="text" name="choices" placeholder={"Question Choices"} value={questionForm.choices} onChange={handleChoicesChange}/>
                        </label>
                        <button type="button" onClick={() =>
                                createServiceQuestion(questionForm)
                                    .then(updateQuestions)
                                }>
                            CREATE NEW QUESTION
                        </button>
                        <button type="button" onClick={() =>
                                updateServiceQuestion(questionForm)
                                    .then(updateQuestions)
                                }>
                            CONFIRM EDIT
                        </button>
                </form>
                <table className="table">
                    <tbody>
                    {
                        Array.from(serviceQuestions)
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>{serviceQuestion.title}</td>
                                    <td>{serviceQuestion.question}</td>
                                    <td>{serviceQuestion.type}</td>
                                    <td>{serviceQuestion.choices}</td>
                                    {/* DELETE button, calls delete function then updates state*/}
                                    <td>
                                        <button onClick={() =>
                                            deleteServiceQuestion(serviceQuestion.id)
                                                .then(updateQuestions)
                                        }>
                                            DELETE
                                        </button>
                                    </td>
                                    {/* UPDATE button, calls update function then updates state*/}
                                    <td>
                                        <button onClick={() =>
                                            handleEditClick(serviceQuestion.id, serviceQuestion)
                                        }>
                                            EDIT
                                        </button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>;

export default ServiceQuestions