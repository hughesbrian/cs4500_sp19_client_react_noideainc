import React from 'react'

const SearchBar = ({history, filteredProviders, updateField, name, zip, findFilteredProviders}) =>
    <div className="input-group input-group-lg">
        <input
            placeholder="Search for providers"
            type="text"
            name="name"
            value={name}
            onChange={updateField}
            className="form-control"/>
        <input
            placeholder="Zip code"
            type="text"
            name="zip"
            value={zip}
            onChange={updateField}
            className="form-control"/>
        <div className="input-group-append">
            <button
                onClick={findFilteredProviders}
                className="btn btn-primary"
                type="button">
                Search
            </button>
        </div>
    </div>

export default SearchBar