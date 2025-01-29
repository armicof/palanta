import Card from './components/Card';

export default function Product() {
  // let
  // const
  const data = [
    {
      price: 180,
      img: './assets/tas-gucci.png',
      title: 'Gucci Duffle Bag',
    },
    {
      price: 4000,
      img: './assets/cpu-cooler.png',
      title: 'Cooler PC',
    },
    {
      price: 2000,
      img: './assets/stick.png',
      title: 'Gamepad',
    },
    {
      price: 20,
      img: './assets/jacket.png',
      title: 'Jacket',
    },
  ];

  return (
    <section className="flex flex-col w-fit mx-auto p-8">
      <div className="flex flex-row justify-between items-center py-4">
        <p className="text-xl">Wishlist (4)</p>
        <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">Move All To Bag</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {data.map((item, index) => (
          <Card key={index} price={item.price} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
}
