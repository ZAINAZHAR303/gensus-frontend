// components/HeroSection.jsx
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur rounded-2xl shadow-xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Turn Your Startup Dream Into Reality</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        AI-powered insights to refine your idea, analyze markets, and build a winning business plan.
      </p>
      <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">Get Started</Button>
    </section>
  );
}

// components/FeaturesSection.jsx
import { Lightbulb, Search, FileText, MapPin } from "lucide-react";

const features = [
  { title: "Refine Your Idea", icon: Lightbulb, description: "Make your idea more unique and actionable." },
  { title: "Identify Market Gaps", icon: Search, description: "Find unmet needs in your target industry." },
  { title: "Generate Business Plan", icon: FileText, description: "Create a Lean Business Model Canvas instantly." },
  { title: "City-Based Market Analysis", icon: MapPin, description: "Evaluate startup growth in your target city." },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 grid md:grid-cols-2 gap-8">
      {features.map(({ title, icon: Icon, description }) => (
        <div
          key={title}
          className="bg-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex items-start gap-4"
        >
          <div className="p-3 bg-white/40 rounded-full shadow-inner">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

// components/BeginnerBenefits.jsx
export default function BeginnerBenefits() {
  const benefits = [
    { icon: "🚀", text: "No experience needed" },
    { icon: "📊", text: "AI-crafted strategies" },
    { icon: "🧭", text: "Clear market direction" },
    { icon: "📌", text: "Competitor overview" },
  ];

  return (
    <section className="bg-white/40 backdrop-blur rounded-2xl shadow-xl p-10 text-center my-10">
      <h2 className="text-2xl font-bold mb-6">Perfect for Beginners</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {benefits.map(({ icon, text }, i) => (
          <li key={i} className="flex items-center gap-3 justify-center">
            <span className="text-2xl">{icon}</span>
            <span className="text-lg font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-sm text-gray-600 p-6 text-center bg-white/30 backdrop-blur rounded-t-xl">
      <p>&copy; 2025 Gensus Hackathon Project</p>
      <p>
        <a href="#" className="underline">About</a> | <a href="#" className="underline">Contact</a> | <a href="#" className="underline">API Docs</a> | <a href="https://github.com" target="_blank">GitHub</a>
      </p>
    </footer>
  );
}

// pages/index.jsx
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BeginnerBenefits from "../components/BeginnerBenefits";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <HeroSection />
      <FeaturesSection />
      <BeginnerBenefits />
      <Footer />
    </main>
  );
}
