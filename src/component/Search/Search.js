import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input 
            type='search'
            className='search'
            placeholder={props.placeholder}
            onChange = {props.handleChange}
            />
        </div>
    )
}

export default Search;