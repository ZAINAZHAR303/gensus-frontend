import React from 'react'

export default function AboutProblem() {
  const problemSections = [
    {
      title: "The Problem",
      description: "Early-stage founders struggle to organize, plan, and execute startup ideas effectively.",
      icon: "🎯"
    },
    {
      title: "Our Solution",
      description: "An AI-powered copilot that guides founders through the entire startup journey.",
      icon: "💡"
    }
  ];

  const features = [
    { icon: "📊", text: "Business Plan Generation", detail: "Auto-generated lean canvas" },
    { icon: "🎤", text: "Pitch Deck Creation", detail: "AI-crafted compelling narratives" },
    { icon: "🔍", text: "Competitor Analysis", detail: "Real-time market insights" },
    { icon: "💼", text: "Funding Guidance", detail: "Smart investment strategies" }
  ];

  const uniquePoints = [
    { icon: "✨", text: "All-in-One Platform", detail: "Unified startup planning tools" },
    { icon: "💰", text: "Business Value", detail: "B2B SaaS potential" },
    { icon: "🧠", text: "Advanced Tech", detail: "Powered by LangGraph & LangChain" },
    { icon: "🎯", text: "Perfect Fit", detail: "Built for founders by founders" }
  ];

  return (
    <section className="space-y-8 p-6">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Startup Copilot
        </h1>
        <p className="text-lg text-blue-800/80 mt-2">Your AI-Powered Journey to Success</p>
      </div>

      {/* Problem & Solution Statement */}
      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 backdrop-blur rounded-2xl shadow-xl p-8">
        {problemSections.map((section, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-2xl font-bold text-blue-800">{section.title}</h2>
            </div>
            <p className="text-lg text-gray-700 ml-12">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Core Features */}
      <div className="bg-white/40 backdrop-blur rounded-2xl shadow-xl p-8 hover:shadow-blue-100/50 transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Core Features</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map(({ icon, text, detail }, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white/60 rounded-lg border border-blue-50 hover:border-blue-200 transition-colors duration-300">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-blue-900">{text}</h3>
                <p className="text-gray-600">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Value Propositions */}
      <div className="bg-white/40 backdrop-blur rounded-2xl shadow-xl p-8 hover:shadow-blue-100/50 transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Why We're Different</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {uniquePoints.map(({ icon, text, detail }, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white/60 rounded-lg border border-blue-50 hover:border-blue-200 transition-colors duration-300">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-blue-900">{text}</h3>
                <p className="text-gray-600">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



