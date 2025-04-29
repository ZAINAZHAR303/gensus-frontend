"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function BusinessPlan() {
  const [idea, setIdea] = useState("");
  const [industry, setIndustry] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.a0.0.1:8000/api/startup/business-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea, industry }),
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <Navbar />
      <h1>Business Plan Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Startup Idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <input
          type="text"
          placeholder="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p><strong>Refined Idea:</strong> {response.refined_idea}</p>
          <p><strong>Market Gap:</strong> {response.market_gap}</p>
          <h4>Business Plan:</h4>
          <pre>{JSON.stringify(response.business_plan, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}