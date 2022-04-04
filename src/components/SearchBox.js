import React from "react";


const SearchBox = ({searchChange,searchField})=>{
  return(
    <div className="pa2">
      <input
      className="pa3 ba b--green bg-black"
      type="search" 
      placeholder="SEARCH ROBOTS"
      onChange = {searchChange} />
      
    </div>
  )

}

export default SearchBox