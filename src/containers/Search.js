import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import useDebouce from "../utils/use-debouce";

import { SEARCH_CHARACTER } from "../graphql/character";
import Profile from "../components/Profile";

function Search() {
  const [name, setName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const debouncedName = useDebouce(name, 300);
  const { loading, data } = useQuery(SEARCH_CHARACTER, {
    variables: { name: debouncedName },
    skip: !debouncedName
  });

  useEffect(() => {
    if (!loading && data && data.Character) {
      setShowResults(true);
    }
  }, [data]);

  return (
    <div>
      {showResults && (
        <button className="App-back" onClick={() => setShowResults(false)}>
          Try another character
        </button>
      )}
      {!showResults && (
        <header className="App-header">
          <h1>Search your favorite Anime character</h1>
          <input
            type="text"
            placeholder="try: Goku"
            onChange={e => setName(e.target.value)}
          />
          {loading && <h2>Loading</h2>}
        </header>
      )}
      {data && data.Character && data.Character.id && (
        <Profile {...data.Character} />
      )}
    </div>
  );
}

export default Search;
