import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("Heading");

  return (
    <div className="markdown-container">
      <h1 className="title">My Markdown Previewer</h1>
      <br />
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <br />
      <h1 className="title">Output</h1>
      <br />
      <ReactMarkdown source={markdown} className="markdown_preview" />
    </div>
  );
}
