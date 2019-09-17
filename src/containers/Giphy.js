import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { SEARCH_GIF } from "../graphql/giphy";

function Giphy({ search, charName }) {
  const { loading, data } = useQuery(SEARCH_GIF, {
    variables: { query: search }
  });

  console.log(data);

  return (
    <section>
      <h3>{charName} GIFs</h3>
      {data &&
        data.search &&
        data.search.results.map(({ embed_url }) => (
          <iframe key={embed_url} src={embed_url} allowFullScreen></iframe>
        ))}
    </section>
  );
}

export default Giphy;
