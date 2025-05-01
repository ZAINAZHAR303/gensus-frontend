import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="m-4 p-4 rounded-2xl shadow-inner bg-[#f0f0f3] flex justify-between items-center backdrop-blur-md">
      <div className="text-xl font-bold text-gray-800">🚀 Startup Copilot</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:scale-105 transition-transform">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/idea">Startup Idea</Link>
        </li>
        <li className="hover:scale-105 transition-transform">
          <Link href="/business-plan">Business Plan</Link>
        </li>
        {/* Future links can be uncommented */}
        {/* <li className="hover:scale-105 transition-transform">
          <Link href="/pitch-deck">Pitch Deck</Link>
        </li> */}
        <li className="hover:scale-105 transition-transform">
          <Link href="/city-growth">City Growth</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
