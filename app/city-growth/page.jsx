"use client"

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Bar } from "react-chartjs-2";

export default function CityGrowth() {
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/startup/city-growth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, industry }),
    });
    const data = await res.json();
    setResponse(data);
  };

  // const chartData = response
  //   ? {
  //       labels: ["Growing", "Struggling"],
  //       datasets: [
  //         {
  //           label: "Startup Growth",
  //           data: [
  //             response.stats.growing_percentage,
  //             response.stats.struggling_percentage,
  //           ],
  //           backgroundColor: ["#4caf50", "#f44336"],
  //         },
  //       ],
  //     }
  //   : null;

  return (
    <div>
      <Navbar />
      <h1>City-Based Startup Growth Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
    <h3>Analysis:</h3>
    {/* <Bar data={chartData} /> */}

    <h4>Market Situation</h4>
    <p><strong>Situation:</strong> {response.situation}</p>
    <p><strong>Challenges:</strong> {response.challenges}</p>
    <p><strong>Opportunities:</strong> {response.opportunities}</p>
    <p><strong>Competition Score:</strong> {response.competition_score}/100</p>

    <h4>Competitors in {city}</h4>
    <ul>
      {response.competitors.map((comp, i) => (
        <li key={i}>
          <a href={comp.link} target="_blank" rel="noopener noreferrer">
            {comp.title}
          </a>
          <p>{comp.snippet}</p>
        </li>
      ))}
    </ul>

    <h4>Market Competition Level</h4>
    {/* <Bar
      data={{
        labels: response.graph_data.labels,
        datasets: [
          {
            label: "Market Competition",
            data: response.graph_data.values,
            backgroundColor: ["#2196f3", "#ff9800", "#9c27b0"],
          },
        ],
      }}
    /> */}
  </div>
)}

    </div>
  );
}