import React from 'react';

const SearchForm = ({name, actionHandler, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input name={name} onChange={actionHandler}  type="text" required/>
            <button>Search</button>
        </form>
    );
}

export default SearchForm;
