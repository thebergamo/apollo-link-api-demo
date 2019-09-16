import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./graphql/client";
import Search from "./containers/Search";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Search />
      </div>
    </ApolloProvider>
  );
}

export default App;
