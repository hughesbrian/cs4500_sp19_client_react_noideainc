onst ServiceQuestion = ({serviceQuestion, Criteria, add_Criteria}) =>
    <div>
        {
            serviceQuestion.type === 'MULTIPLE_CHOICE' &&
            <ServiceMultipleChoiceQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }
        {
            serviceQuestion.type === 'TRUE_FALSE' &&
            <ServiceTrueFalseQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }
        {
            serviceQuestion.type === 'RANGE' &&
            <ServiceRangeAnswerQuestion
                serviceQuestion={serviceQuestion}
                Criteria = {Criteria}
                add_Criteria = {add_Criteria}/>
        }

    </div>



export default ServiceQuestion