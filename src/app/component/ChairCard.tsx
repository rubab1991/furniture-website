// components/ChairCard.tsx
import Image from "next/image";

interface ChairCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

export default function ChairCard({ imageSrc, title, description, price }: ChairCardProps) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-2xl">
      {/* Image */}
      <div className="relative h-30 w-full flex justify-between">
        <Image
          src={imageSrc}
          alt={title}

          objectFit="cover"
          className="rounded-lg"
          width={150}
          height={150}
        />
      </div>
      {/* Content */}
      <div className="px-6 py-6">
        <h2 className="text-gray-600 ">{title}</h2>
        <p className=" text-sm text-gray-800 font-bold mt-2">{description}</p>
        <Image src="/images/rating.png" width={80} height={80} alt="rating" />
      </div>
      {/* Price */}
      <div className="px-6 py-4 flex justify-around">
        <span className="text-lg font-bold text-blue-600">{price}</span>
        <Image src="/images/plus.png" width={30} height={30} alt="plus" />
      </div>
    </div>
  );
}
