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