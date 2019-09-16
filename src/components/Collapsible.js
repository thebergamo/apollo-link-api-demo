import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./collapsible.css";

function Collapsible({ content, showMax }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className="Collapsible">
      <article
        className={`Collapsible__Article Collapsible__Article--${
          isCollapsed ? "open" : "close"
        }`}
      >
        <ReactMarkdown source={content} />
      </article>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Hide Content" : "Show Content"}
      </button>
    </section>
  );
}

export default Collapsible;
