"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Idea() {
  const [industry, setIndustry] = useState("");
  const [idea, setIdea] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://127.0.0.1:8000/api/startup/idea?industry=${industry}&idea=${idea}`,
      { method: "POST" }
    );
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <Navbar />
      <h1>Startup Idea Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>Refined Idea: {response.refined_idea}</p>
          <p>Market Gap: {response.market_gap}</p>
        </div>
      )}
    </div>
  );
}