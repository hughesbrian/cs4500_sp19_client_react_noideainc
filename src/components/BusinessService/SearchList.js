import React from 'react'

const SearchList = ({Services, UpdateQuestions}) =>
    <div>
        {
            Array.from(Services).map(service =>
                <div>
                    <button onClick={() => UpdateQuestions(service.id)}> {service.title} </button>
                </div>

            )

        }

    </div>

export default SearchList