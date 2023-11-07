import React, { useState, useEffect } from 'react'; 
import Results from '../component/results';
import Navbar from '../component/navbar';
import '../styles.css';

function Main({ saveState }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  /*
  useEffect(() => {
    // Set the background when the component mounts or saveState changes
    document.body.style.background = saveState
      ? 'linear-gradient(#800020, #370b0b)'  // Background for saved state
      : 'linear-gradient(#800020, #370b0b)'; // Background for default state
    
    // Reset the background when the component unmounts
    return () => {
      document.body.style.background = 'linear-gradient(#800020, #243b55)'; // Reset to the default gradient
    };
  }, [saveState]); // This effect runs when saveState changes
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  if (!saveState) {
    return (
      <div>
        <Navbar variant={false}></Navbar>
        <div className='main-square'> 
          <form onSubmit={handleSubmit} className="input-container"> 
            <input
              type="text"
              /* placeholder="Enter course name..." */
              placeholder="CISC. 3140 or 3142 or ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input" 
            />
            <button type="submit" className="search-button"> 
              Search
            </button>
          </form>
          <div className='results'>
            <Results search={search} saveState={saveState}></Results>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar variant={true}></Navbar>
        <div className='main-square'>
          <div className='results'>
            <Results search={search} saveState={saveState}></Results>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
