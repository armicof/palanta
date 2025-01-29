/* eslint-disable react/prop-types */
export default function Card({ img = './assets/tas-gucci.png', title = 'ini produk', price = '100' }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col">
        <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
          <img src={img} alt={img} />
        </figure>
        <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
          <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
        </button>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold">{title}</p>
        <p className="text-rose-600">${price}</p>
      </div>
    </div>
  );
}
