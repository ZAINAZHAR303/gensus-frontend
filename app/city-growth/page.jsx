"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
export default function CityGrowth() {
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/api/startup/city-growth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, industry }),
    });
    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] py-8 px-4">
      <Navbar />
      <Hero />
      <div className="max-w-4xl mx-auto bg-[#f0f0f3] p-8 rounded-3xl shadow-inner">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🌆 City-Based Startup Growth Analyzer
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter City (e.g., Faisalabad)"
            className="p-3 rounded-xl shadow-inner bg-[#e6e6e6] focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Industry (e.g., Textile)"
            className="p-3 rounded-xl shadow-inner bg-[#e6e6e6] focus:outline-none"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Analyzing..." : "Analyze Growth"}
          </button>
        </form>

        {response && (
          <div className="mt-10 bg-white p-6 rounded-2xl shadow-inner space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">📈 Analysis Summary</h2>

            <div className="bg-[#f9f9f9] p-4 rounded-xl">
              <p className="mb-3">
                <strong>🧠 Situation:</strong> {response.situation}
              </p>
              <p className="mb-3">
                <strong>⚠️ Challenges:</strong>{" "}
                <ul className="list-disc ml-6 text-sm text-gray-700">
                  {response.challenges.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </p>
              <p className="mb-3">
                <strong>🚀 Opportunities:</strong>{" "}
                <ul className="list-disc ml-6 text-sm text-gray-700">
                  {response.opportunities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </p>
              <p>
                <strong>📊 Competition Score:</strong>{" "}
                <span className="text-blue-600 font-medium">
                  {response.competition_score}/100
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🏢 Top Competitors in {city}
              </h3>
              <ul className="space-y-3">
                {response.competitors.map((comp, i) => (
                  <li key={i} className="bg-[#f4f4f4] p-4 rounded-xl shadow-inner">
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      {comp.title}
                    </a>
                    <p className="text-sm text-gray-600">{comp.snippet}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🧮 Market Competition Level
              </h3>
              <p className="text-gray-500">
                (Chart integration here — enable chart component like Chart.js)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
