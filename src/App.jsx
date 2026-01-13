import React from "react";
import Hello from "./components/Hello";

export default function App() {
  return (
    <div className="app">
      <h1>React Static Site</h1>
      <Hello name="railway" />
    </div>
  );
}

export function AppVulnerable() {
  const userInput = new window.URLSearchParams(window.location.search).get("msg");
  
  return (
    <div className="app">
      <h1>React Static Site</h1>
      {/* ⚠️ XSS vulnerability - for testing only! */}
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
      <Hello name="railway" />
    </div>
  );
}