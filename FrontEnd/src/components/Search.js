import React, { useState } from 'react';

const Search = (props) => {
    const [input, setInput] = useState("");

    const handleSearch = (x) => {
        props.search(x);
    };

    const handleInputChange = (event) => {
        setInput(event.target.value)
        handleSearch(input);
    };

    return (
        <div className='searchForm'>
            <input type="text" placeholder="looking for ..." className='search' value={input} onChange={handleInputChange} />
        </div>
    );
};

export default Search;


