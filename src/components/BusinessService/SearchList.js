import React from 'react'

const SearchList = ({Services}) =>
    <div>
        {
            Array.from(Services).map(service =>
                <div>
                    <button> {service.title} </button>
                </div>

            )

        }

    </div>

export default SearchList