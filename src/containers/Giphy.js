import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { SEARCH_GIF } from "../graphql/giphy";

function Giphy({ search, charName }) {
  const { loading, data } = useQuery(SEARCH_GIF, {
    variables: { query: "Goku" }
  });

  console.log(data);

  return (
    <section>
      <h3>{charName} GIFs</h3>
      {data &&
        data.search &&
        data.search.results.map(({ embed_url }) => <img src={embed_url} />)}
    </section>
  );
}

export default Giphy;
