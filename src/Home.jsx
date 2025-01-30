import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const homestayRef = useRef(null);
  const contactRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToRef = (target) => {
    let ref;
    switch (target) {
      case "home":
        ref = homeRef;
        break;
      case "homestay":
        ref = homestayRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        return;
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const back = [
    "/assets/bg1.png",
  ]
  const images = [
    "/assets/foto3.png",
    "/assets/foto4.png",
    "/assets/foto5.png",
    "/assets/foto6.png",
    "/assets/foto7.png",
    "/assets/foto8.png",
  ];

  return (
    <section className="flex flex-col overflow-hidden">
      <Navbar scrollToRef={scrollToRef} />

      <div
        ref={homeRef}
        style={{ backgroundImage: `url(${back[0]})` }}
        className="bg-fixed flex flex-col items-center justify-between mt-10 w-full h-[750px] sm:bg-cover bg-center "
      >
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 px-8 sm:px-16 md:px-32 py-10 border-b-2 border-white mt-[150px] sm:mt-[100px] text-[32px] sm:text-[48px] md:text-[61px] text-center sm:text-left">
          <h1 className="text-white max-w-[500px] font-sans font-thin">
            Pilihanmu untuk penginapan yang ramah di kantong
          </h1>
          <button
            onClick={() => scrollToRef("contact")}
            className="w-24 sm:w-32 md:w-52 h-24 sm:h-32 md:h-52"
          >
            <img src="./assets/btn1.png" alt="" className="w-full h-full" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-16 md:px-32 pb-16 pt-8 text-[18px] sm:text-[24px] bg-gradient-to-t from-black to-transparent">
        <p className="text-white max-w-[90%] sm:max-w-[748px] font-sans text-center sm:text-left">
          HomeStay syariah dengan view Danau Maninjau nan eksotis dengan fasilitas yang lengkap, akses yang mudah dijangkau dan harga yang ramah di kantong.
        </p>
        <button onClick={() => scrollToRef("homestay")} className="w-16 sm:w-32 md:w-52 h-16 sm:h-32 md:h-52">
          <img src="./assets/btn2.png" alt="" className="" />
        </button>
      </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-[#FAF2E6] px-4 text-center">
        <div className="flex flex-col items-center justify-center w-full py-20 sm:py-40 gap-6 sm:gap-10">
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] max-w-[560px]">
            Selamat Datang di Palanta Homestay.
          </h1>
          <p className="max-w-[90%] sm:max-w-[897px]">
           Rasakan pengalaman menginap yang tak tertandingi, di mana kenyamanan dan setiap keinginan Anda menjadi prioritas kami.
           Bergabunglah dengan kami dalam mendefinisikan ulang seni keramahan, dan biarkan kami memanjakan Anda di dunia di mana kenyamanan berpadu dengan sempurna.
           Selamat datang di perjalanan penuh keindahan,selamat menikmati liburan anda.
          </p>
        </div>
        <div className="bg-white flex flex-col sm:flex-row items-center justify-between w-full gap-7 ">
          <img src="./assets/foto1.png" alt="" className="w-full sm:w-1/2 h-[400px] sm:h-[600px]" />
          <img src="./assets/foto2.png" alt="" className="w-full sm:w-1/2 h-[400px] sm:h-[600px]" />
        </div>
      </div>

      <div ref={homestayRef} className="flex flex-col px-4 sm:px-16 md:px-36 py-16 sm:py-28">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <h1 className="text-[32px] sm:text-[49px] font-sans font-thin w-full sm:w-[311px]">
            Facilities and Service
          </h1>
          <p className="text-[16px] sm:text-[20px] w-full sm:w-[727px]">
          Temukan dunia di mana kenyamanan bertemu dengan ketenangan, di mana setiap momen adalah simfoni relaksasi dan kehalusan.
          Tempat perlindungan penuh kesederhanaan dan kenyamanan ,kami menanti kehadiran Anda.          </p>
        </div>
        <div className="w-full py-10 sm:py-20 overflow-hidden">
          <motion.div
            className="flex w-max gap-4 sm:gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt="" className="w-24 sm:w-32 md:w-48" />
            ))}
          </motion.div>
        </div>
      </div>
      <div ref={contactRef} className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col w-full sm:w-1/2 h-auto px-8 sm:px-[140px] py-16 sm:py-[100px] bg-[#FAF2E6]">
          <ul className="flex flex-col items-start justify-start gap-4 sm:gap-6">
            <p className="text-[#A4A4A4]">Pages</p>
            <button onClick={() => scrollToRef("home")}>Home</button>
            <button onClick={() => scrollToRef("homestay")}>Rooms</button>
            <button onClick={() => scrollToRef("contact")}>Contact</button>
          </ul>
          {!isMobile && <h1 className="text-[24px] sm:text-[40px] font-sans font-thin pt-20">Palanta Homestay.</h1>}
        </div>
        <div className="flex flex-col sm:flex-row px-8 sm:px-[140px] py-14 sm:py-[100px] w-full sm:w-1/2 gap-8 sm:gap-[251px]">
          <ul className="flex flex-col gap-3">
            <p className="text-[#A4A4A4]">Phone</p>
            <p>08126638790</p>
            <p>081374224155</p>
          </ul>
          <ul className="flex flex-col gap-4">
            <p className="text-[#A4A4A4]">Address</p>
            <div className="flex flex-row gap-2">
              <img src="./assets/logo.png" alt="" className="w-6 h-8" />
              <a href="https://maps.app.goo.gl/zb6LdgHomijWghcJ8">P66G+3VW, Jl. Maninjau - Lubuk Basung, Maninjau, Kec. Tj. Raya, Kabupaten Agam, Sumatera Barat 26471</a>
            </div>
          </ul>
        </div>
        <h1 className="sm:hidden flex pb-5 items-center justify-center text-[24px] sm:text-[40px] font-sans font-thin mt-4 sm:mt-6">Palanta Homestay.</h1>
      </div>
    </section>
  );
}
