import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ scrollToRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row fixed justify-between items-center w-full text-neutral-900 bg-white p-3 z-40">
      <h1 className="flex justify-start mx-6 text-2xl">Palanta Homestay.</h1>
      <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden p-4">
        ☰
      </button>
      <ul className={`${menuOpen ? 'block' : 'hidden'} items-center sm:flex sm:items-center sm:justify-end sm:mx-6 sm:py-4`}>
        <li className="block sm:inline-block mx-3 text-sm">
          <button onClick={() => { scrollToRef("home"); setMenuOpen(false); }}>Home</button>
        </li>
        <li className="block sm:inline-block mx-3 text-sm">
          <button onClick={() => { scrollToRef("homestay"); setMenuOpen(false);}}>Homestay</button>
        </li>
        <li className="block sm:inline-block mx-3 text-sm">
          <button onClick={() => { scrollToRef("contact"); setMenuOpen(false); }}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
