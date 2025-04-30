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