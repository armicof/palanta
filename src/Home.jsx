import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Buat ref untuk setiap bagian
  const homeRef = useRef(null);
  const homestayRef = useRef(null);
  const contactRef = useRef(null);

  // Fungsi untuk menangani scroll ke bagian yang sesuai
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

  const images = [
    "/assets/foto3.png",
    "/assets/foto4.png",
    "/assets/foto5.png",
    "/assets/foto6.png",
    "/assets/foto7.png",
    "/assets/foto8.png",
  ];

  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <Navbar scrollToRef={scrollToRef} />

      {/* Bagian Home */}
      <div ref={homeRef} className="bg-[url(./assets/bg1.png)] bg-fixed flex flex-col items-end justify-between w-full h-[1100px]">
        <div className="flex flex-row items-center justify-between w-full h-[308px] px-32 border-b-2 border-white mt-[600px] text-[61px]">
          <h1 className="text-white w-[500px] h-[308px] font-sans font-thin">
            Pilihanmu untuk penginapan yang ramah dikantong
          </h1>
          <button className="w-[210px] h-[210px]">
            <img src="./assets/btn1.png" alt="" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-[50px] px-32 pb-32 text-[24px] bg-gradient-to-t from-black to-transparent">
          <p className="text-white w-[748px] h-[47px] font-sans">
            HomeStay syariah dengan view Danau Maninjau nan eksotis dengan fasilitas yang lengkap, akses yang mudah dijangkau dan harga yang ramah dikantong.
          </p>
          <button className="w-[210px] h-[210px]">
            <img src="./assets/btn2.png" alt="" />
          </button>
        </div>
      </div>

      {/* Bagian Selamat Datang */}
      <div className="flex flex-col items-center justify-center w-full bg-[#FAF2E6]">
        <div className="flex flex-col items-center justify-center w-full py-40 gap-10">
          <h1 className="text-[64px] w-[560px] text-center">
            Selamat Datang di Palanta Homestay.
          </h1>
          <p className="w-[897px] text-center">
            Rasakan pengalaman menginap yang tak tertandingi, di mana kenyamanan dan setiap keinginan Anda menjadi prioritas kami. Bergabunglah dengan kami dalam mendefinisikan ulang seni keramahan, dan biarkan kami memanjakan Anda di dunia di mana kenyamanan berpadu dengan sempurna. Selamat datang di perjalanan penuh keindahan, selamat menikmati liburan anda.
          </p>
        </div>
        <div className="bg-white flex flex-row items-center justify-between w-full">
          <img src="./assets/tes1.png" alt="" />
          <img src="./assets/tes2.png" alt="" />
        </div>
      </div>

      {/* Bagian Facilities and Service */}
      <div ref={homestayRef} className="flex flex-col px-36 py-40">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[49px] font-sans font-thin w-[311px]">
            Facilities and Service
          </h1>
          <p className="text-[20px] text-end w-[727px] font-sans">
            Temukan dunia di mana kenyamanan bertemu dengan ketenangan, di mana setiap momen adalah simfoni relaksasi dan kehalusan. Tempat perlindungan penuh kesederhanaan dan kenyamanan, kami menanti kehadiran Anda.
          </p>
        </div>
        <div className="w-full py-20">
          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt="" className="w-100" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bagian Contact */}
      <div ref={contactRef} className="flex flex-row">
        <div className="flex flex-col w-1/2 h-[590px] px-[140px] py-[100px] bg-[#FAF2E6]">
          <ul className="flex flex-col items-start justify-start gap-6 w-full h-full">
            <p className="text-[#A4A4A4]">Pages</p>
            <button>Home</button>
            <button>Rooms</button>
            <button>Contact</button>
          </ul>
          <h1 className="text-[40px] font-sans font-thin">Palanta Homestay.</h1>
        </div>
        <div className="flex flex-row px-[140px] py-[100px] w-1/2 h-[590px] gap-[251px]">
          <ul className="flex flex-col gap-3">
            <p className="text-[#A4A4A4]">Phone</p>
            <p>08126638790</p>
            <p>081374224155</p>
          </ul>
          <ul className="flex flex-col gap-4">
            <p className="text-[#A4A4A4]">Address</p>
            <div className="flex flex-row gap-2">
              <img src="./assets/logo.png" alt="" className="w-6 h-8" />
              <a href="https://maps.app.goo.gl/zb6LdgHomijWghcJ8">
                P66G+3VW, Jl. Maninjau - Lubuk Basung, Maninjau, Kec. Tj. Raya, Kabupaten Agam, Sumatera Barat 26471
              </a>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}