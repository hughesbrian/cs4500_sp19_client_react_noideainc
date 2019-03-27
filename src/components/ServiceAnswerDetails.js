import React from 'react'

const ServiceAnswerDetails = ({serviceAnswers, answer, createAnswer, serviceQuestion, serviceQuestions, findAllServiceAnswer,selectServiceAnswer, updateMinValue, updateChoiceAnswer,
    updateMaxValue, updateTrueFalse, updateNewMinValue, updateNewChoiceAnswer, updateNewMaxValue, updateNewTrueFalse, selectServiceQuestion, createServiceAnswer, deleteServiceAnswer, updateServiceAnswer}) =>
            <div>
                <h3>Service Answer Details</h3>
                <select
                    value={answer.id}
                    onChange={(e) => selectServiceAnswer(e.target.value)}
                    className="select-answer">
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
                    className="answer-id"
                    value={answer.id}/>
                <label>Answer minAnswer</label><br/>
                <input
                    onChange = { (e) => updateMinValue(e)}
                    className="answer-min"
                    value={answer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => updateMaxValue(e)}
                    className="answer-max"
                    value={answer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => updateChoiceAnswer(e)}
                    className="answer-choice"
                    value={answer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => updateTrueFalse(e)}
                    className="answer-true-false"
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
                    className="select-question">
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
                    className="create-min"
                    value={createAnswer.minRangeAnswer}/>

                <label>Answer maxAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewMaxValue(e)}
                    className="create-max"
                    value={createAnswer.maxRangeAnswer}/>
                <label>Answer choiceAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewChoiceAnswer(e)}
                    className="create-choice"
                    value={createAnswer.choiceAnswer}/>
                <label>Answer trueFalseAnswer</label><br/>
                <input
                    onChange = { (e) => updateNewTrueFalse(e)}
                    className="create-true-false"
                    value={createAnswer.trueFalseAnswer}/>
                <button onClick={createServiceAnswer}>
                    Create
                </button>
            </div>;





export default ServiceAnswerDetails