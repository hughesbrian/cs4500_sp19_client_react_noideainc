import React from 'react'

const ServiceAnswerDetails = ({serviceAnswers, answer, createAnswer, serviceQuestion, serviceQuestions, findAllServiceAnswer,selectServiceAnswer, updateMinValue, updateChoiceAnswer,
    updateMaxValue, updateTrueFalse, updateNewMinValue, updateNewChoiceAnswer, updateNewMaxValue, updateNewTrueFalse, selectServiceQuestion, createServiceAnswer, deleteServiceAnswer, updateServiceAnswer}) =>
            <div>
                <h3>Service Answer Details</h3>
                <select
                    value={answer.id}
                    onChange={(e) => selectServiceAnswer(e.target.value)}
                    className="form-control">
                    {
                        serviceAnswers
                            .map(answer =>
                                <option
                                    value={answer.id}
                                    key={answer.id}>
                                    {answer.id}
                                </option>

                            )

                    }
                </select>
                <label>Answer ID</label><br/>
                <input
                    onChange = {(e) => e }
                    className="form-control"
                    value={answer.id}/>
                <label>Answer minAnswer</label><br/>
                <input
                    onChange = { (e) => updateMinValue(e)}
                    className="form-control"
                    value={answer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => updateMaxValue(e)}
                    className="form-control"
                    value={answer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => updateChoiceAnswer(e)}
                    className="form-control"
                    value={answer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => updateTrueFalse(e)}
                    className="form-control"
                    value={answer.trueFalseAnswer}/>

                <button onClick={() => deleteServiceAnswer(answer.id)}>
                    Delete
                </button>
                <button onClick={updateServiceAnswer}>
                    Update
                </button>
                <h3>Service Question Details</h3>
                <select
                    value={serviceQuestion.id}
                    onChange={(e) => selectServiceQuestion(e.target.value)}
                    className="form-control">
                    {
                        serviceQuestions
                            .map(serviceQuestion =>
                                <option
                                    value={serviceQuestion.id}
                                    key={serviceQuestion.id}>
                                    {serviceQuestion.question}
                                </option>
                            )
                    }
                </select>
                <label>Answer minAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewMinValue(e)}
                    className="form-control"
                    value={createAnswer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewMaxValue(e)}
                    className="form-control"
                    value={createAnswer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewChoiceAnswer(e)}
                    className="form-control"
                    value={createAnswer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewTrueFalse(e)}
                    className="form-control"
                    value={createAnswer.trueFalseAnswer}/>
                <button onClick={createServiceAnswer}>
                    Create
                </button>
            </div>;





export default ServiceAnswerDetails