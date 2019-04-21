import React from 'react'

const SearchList = ({Services, UpdateQuestions, RemoveFromServiceList}) =>
    <div>
        {
            Services.map(service =>
                <div>
                    {service.title} 
                    <button onClick={() => UpdateQuestions(service.id)}> SELECT </button>
                    <button onClick={() => RemoveFromServiceList(service.id)}> REMOVE </button>
                </div>

            )

        }

    </div>

export default SearchList