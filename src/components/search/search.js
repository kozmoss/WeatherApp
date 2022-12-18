import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useWeather } from "../../api";


const Search = ({setShowMap}) => {
    const {getCurrentWeather} = useWeather();
    const [search,setSearch] = useState("");
    let seachValue = search.trim();
    const handleSubmit = (event) => {
        event.preventDefault();
    if(!seachValue){
        console.log("Error!")}
        getCurrentWeather(seachValue);
        setSearch("");
    }

  return (
       <div className="container">
    <div className="row d-flex justify-content-center mb-3">
      <div className="col-7 ">
        <form className="input-group mb-2" onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search city..." />
          <button className="btn btn-secondary me-1" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Search
