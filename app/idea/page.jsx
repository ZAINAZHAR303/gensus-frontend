"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
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
    <div className="bg-gray-100 min-h-screen p-8">
      <Navbar />
      <Hero />  
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Startup Idea Assistant
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="industry" className="block text-gray-700 font-medium">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              placeholder="Enter industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="idea" className="block text-gray-700 font-medium">
              Idea
            </label>
            <input
              type="text"
              id="idea"
              placeholder="Enter startup idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Response:</h3>
            <div className="bg-blue-50 p-4 rounded-md shadow-sm">
              <p>
                <strong className="font-semibold">Refined Idea:</strong> {response.refined_idea}
              </p>
              <p>
                <strong className="font-semibold">Market Gap:</strong> {response.market_gap}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
