import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Navbar />
      <div className="bg-[url(./assets/bg1.png)] bg-fixed flex flex-col items-end justify-between w-[1920px] h-[1100px]">
        <div className="flex flex-row items-center justify-between w-[1640px] h-[308px] border-b-2 border-white mx-36 mt-[600px] text-[61px] ">
            <h1 className="text-white w-[500px] h-[308px] font-sans font-thin">
              Pilihanmu untuk penginapan yang ramah dikantong
            </h1>
            <button className="w-[210px] h-[210px]"><img src="./assets/btn1.png" alt="" /></button>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-[47px] px-32 pb-32 text-[24px]">
            <p className="text-white w-[748px] h-[47px] font-normal">
              HomeStay syariah dengan view Danau Maninjau nan eksotis 
              dengan fasilitas yang lengkap,akses yang mudah dijangkau 
              dan harga yang ramah dikantong.</p>
            <button className="w-[210px] h-[210px]"><img src="./assets/btn2.png" alt="" /></button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-[1000px] bg-[#FAF2E6]">
        <div className="flex flex-col items-center justify-center w-full h-[500px] my-[300px]">
          <h1 className="text-[64px] w-[560px] my-10 text-center">
            Selamat Datang di Palanta Homestay.
          </h1>
          <p className="w-[897px] text-center">
            Rasakan pengalaman menginap yang tak tertandingi, di mana kenyamanan dan setiap keinginan Anda menjadi prioritas kami.
            Bergabunglah dengan kami dalam mendefinisikan ulang seni keramahan, dan biarkan kami memanjakan Anda di dunia di mana kenyamanan berpadu dengan sempurna.
            Selamat datang di perjalanan penuh keindahan,selamat menikmati liburan anda.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-[1920px] h-[500px]">
         <img src="./assets/foto1.png" alt="" />
         <img src="./assets/foto2.png" alt="" />
        </div>
      </div>
      
    </section>
  );
}
