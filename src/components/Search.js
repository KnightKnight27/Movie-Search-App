import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    setSearchValue(e.target.value);
    props.search(searchValue); 
  }
  return (
      <form className="search" action="#"  >
        < input
          value={searchValue}
          onChange={callSearchFunction}
          type="text"
        />
      </form >
    );
}

export default Search;