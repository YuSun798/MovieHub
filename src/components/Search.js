import React, { useState } from "react";


const Search = (props) => {
//in the past, in order to handle internal state, we would have to create a class component
//with hooks we can have a functional component handle its own internal state
  const [searchValue, setSearchValue] = useState("");//useState is a hooks API, accepts one argument which is the initial state, and then it returns an array containing the current state????

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;