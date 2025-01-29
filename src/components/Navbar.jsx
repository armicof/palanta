export default function Navbar() {
    return (
      <section className="flex flex-row fixed justify-between items-center w-full text-neutral-900 bg-white p-5">
        <h1 className="flex justify-start mx-6 text-2xl">Palanta Homestay.</h1>
        <ul className="flex justify-end mx-6">
            <li className="inline-block mx-3 text-sm"><button>Home</button></li>
            <li className="inline-block mx-3 text-sm"><button>Our Homestay</button></li>
            <li className="inline-block mx-3 text-sm"><button>Contact</button></li>
        </ul>
      </section>
    );
  }