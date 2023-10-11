
export default function ProductFilters({fliterValueSelected , onFilteredPriceSelected}) {

  const onFilterValueChanged = (event)=>{
    // console.log(event.target.value);
    fliterValueSelected(event.target.value)
  }

  const onFilterPriceChanged = (event)=>{
    // console.log(event.target.value);
    onFilteredPriceSelected(event.target.value)
  }
  return (
    <div className="col-md-3">
    {/* <Search query={query} /> */}
    
    {/* <!-- Sidebar with filters --> */}
    <div className="card">
      <div className="card-body">
        {/* <!-- Filter options --> */}
        <h5 className="card-title">Filters</h5>
        <form className="d-flex mb-3">
      <input 
        className="form-control me-2" 
        type="search"
        value=''
        placeholder="Search" 
        aria-label="Search"
        onChange={(e)=>setQuery(e.target.value)}
        />
     </form>
        <form>
          <div className="mb-3">
            <label >Category</label>
            <select className="form-select" id="category" onChange={onFilterValueChanged}>
              <option defaultValue="Men" selected>Men</option>
              <option defaultValue="Women">Women</option>
              <option defaultValue="Kids">Kids</option>
            </select>
          </div>

          <div className="mb-3">
            <label >Price Below: </label>
            <select className="form-select" id="category" onChange={onFilterPriceChanged}>
              <option defaultValue="30">30</option>
              <option defaultValue="60" selected>60</option>
              <option defaultValue="100">100</option>
            </select>
          </div>

          <div className="mb-3">
            <label >By Price</label>
            <select className="form-select" id="category">
              <option value='' selected>latest</option>
              <option value='Acending'>Acending</option>
              <option value='Decending'>Decending</option>
            </select>
          </div>
          {/* <div className="mb-3">
            <label >Price Range</label>
            <input type="range" className="form-range" id="price" min="0" max="100" step="10" />
          </div>
          <button type="submit" className="btn btn-primary">Apply Filters</button> */}
        </form>
      </div>
    </div>
  </div>
  )
}
