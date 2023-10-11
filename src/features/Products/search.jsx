import React, { useState } from 'react'

export default function Search() {
    const [query, setQuery] = useState('');
  console.log(query);
  return (
    <form className="d-flex">
    <input 
      className="form-control me-2" 
      type="search"
      value={query} 
      placeholder="Search" 
      aria-label="Search"
      onChange={(e)=>setQuery(e.target.value)}
      />
    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
  </form>
  )
}
