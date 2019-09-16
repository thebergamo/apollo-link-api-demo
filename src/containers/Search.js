import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import useDebouce from "../utils/use-debouce";

import { SEARCH_CHARACTER } from "../graphql/character";
import Profile from "../components/Profile";

function Search() {
  const [name, setName] = useState("");
  const debouncedName = useDebouce(name, 300);
  const { loading, data } = useQuery(SEARCH_CHARACTER, {
    variables: { name: debouncedName },
    skip: !debouncedName
  });

  return (
    <div>
      <header className="App-header">
        <h1>Search your favorite Anime character</h1>
        <input type="text" onChange={e => setName(e.target.value)} />
        {loading && <h2>Loading</h2>}
      </header>
      {data && data.Character && data.Character.id && (
        <Profile {...data.Character} />
      )}
    </div>
  );
}

export default Search;
