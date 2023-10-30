import {useState,React} from 'react';
import Results from '../component/results';
import '../styles.css';


function Main() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  //dummy inputs/outputs
  //Input examples: (following degreeworks format)
  //Example #1 “CISC. 3140 or 3142 or 3160 or 3171 or 3220”
  //Example #2 “ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400”
  //Example #3 “BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the query
    setSearch(query);
  };

  return (
    <div class='main'>
      <div class="top-buttons">
          <a href="login.html" class="button">Log In</a>
          <a href="create_account.html" class="button">Create Account</a>
          <a href="aboutUs.html" class="button">About</a>
      </div>

      <div class = 'main-square'>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        </form>
        <div class='results'>
          <Results search={search}></Results>
        </div>
      </div>
    </div>
  );
}

export default Main