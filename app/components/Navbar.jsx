import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link href="/">Home</Link> | <Link href="/idea">Startup Idea</Link> |{" "}
      <Link href="/business-plan">Business Plan</Link> |{" "}
      {/* <Link href="/pitch-deck">Pitch Deck</Link> |{" "}
      <Link href="/competitors">Competitors</Link> |{" "} */}
      <Link href="/city-growth">City Growth</Link>
    </nav>
  );
};

export default Navbar;