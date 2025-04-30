"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
export default function BusinessPlan() {
  const [idea, setIdea] = useState("");
  const [industry, setIndustry] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/api/startup/business-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea, industry }),
    });
    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] px-6 py-8">
      <Navbar />
      <Hero />
      <div className="max-w-3xl mx-auto bg-[#f0f0f3] p-8 rounded-3xl shadow-inner">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📊 Business Plan Generator</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          <input
            type="text"
            placeholder="Enter your startup idea..."
            className="p-3 rounded-xl shadow-inner bg-[#e6e6e6] focus:outline-none"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter industry (e.g., Fintech, Education)"
            className="p-3 rounded-xl shadow-inner bg-[#e6e6e6] focus:outline-none"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Generating..." : "Generate Plan"}
          </button>
        </form>

        {response && (
          <div className="mt-10 bg-white p-6 rounded-2xl shadow-inner">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">✨ AI-Generated Plan</h2>

            <p className="mb-3">
              <strong className="text-gray-800">Refined Idea:</strong> {response.refined_idea}
            </p>
            <p className="mb-3">
              <strong className="text-gray-800">Market Gap:</strong> {response.market_gap}
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">📋 Business Plan:</h3>
              <pre className="bg-[#f5f5f5] p-4 rounded-xl text-sm text-gray-800 overflow-x-auto">
                {JSON.stringify(response.business_plan, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
