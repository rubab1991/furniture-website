// pages/chairs.tsx
import ChairCard from "./ChairCard";

export default function Chairs() {
  const chairs = [
    {
      imageSrc: "/images/chair1.png",
      title: "Chair",
      description: "Sakarias Armchair",
      price: "$392",
    },
    {
      imageSrc: "/images/chair2.png",
      title: "Chair",
      description: "Baltsar Chair",
      price: "$299",
    },
    {
      imageSrc: "/images/chair3.png",
      title: "Chair",
      description: "Anjay Chair",
      price: "$519",
    },
    {
      imageSrc: "/images/chair4.png",
      title: "Chair",
      description: "Nyantuy Chair",
      price: "$921",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chairs.map((chair, index) => (
          <ChairCard
            key={index}
            imageSrc={chair.imageSrc}
            title={chair.title}
            description={chair.description}
            price={chair.price}
          />
        ))}
      </div>
    </div>
  );
}
