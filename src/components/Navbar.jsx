// eslint-disable-next-line react/prop-types
const Navbar = ({ scrollToRef }) => {
  return (
    <nav className="flex flex-row fixed justify-between items-center w-full text-neutral-900 bg-white p-3 z-40">
      <h1 className="flex justify-start mx-6 text-2xl">Palanta Homestay.</h1>
      <ul className="flex justify-end mx-6 py-4">
        <li className="inline-block mx-3 text-sm">
          <button onClick={() => scrollToRef("home")}>Home</button>
        </li>
        <li className="inline-block mx-3 text-sm">
          <button onClick={() => scrollToRef("homestay")}>Our Homestay</button>
        </li>
        <li className="inline-block mx-3 text-sm">
          <button onClick={() => scrollToRef("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;