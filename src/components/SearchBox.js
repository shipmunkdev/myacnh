import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input
            className='pa3 ma2 w-80 ba br-pill b--green bg-lightest-blue'
            type='search'
            placeholder='Search villagers by name, personality, or species'
            onChange={searchChange}
        />
    );
};

export default SearchBox;