// components/ReviewCard.tsx
import Image from "next/image";

interface ReviewCardProps {
  profileImageSrc: string;
  name: string;
  rating: number;
  reviewText: string;
  image:string;
}

export default function ReviewCard({ profileImageSrc, name, rating, reviewText,image }: ReviewCardProps) {
  return (
    <div className=" shadow-2xl rounded-lg p-6 max-w-sm">
      {/* Profile Image and Name */}
      <div className="flex items-center space-x-4">
        <Image
          src={profileImageSrc}
          alt={name}
          width={350}
          height={350}
          className="rounded"
        />
      </div>
      
      <div className="text-center">
<div  className="flex justify-center items-center">
      <Image
          src={image}
          alt={image}
          width={50}
          height={50}
          className="rounded-full"
        />
        </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {/* Display rating stars */}
          <div className="flex justify-center">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-yellow-500 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}>
                ★
              </span>
            ))}
          </div>
        
      {/* Review Text */}
      <p className="mt-4 text-gray-600 text-wrap text-center">{reviewText}</p>
      </div>
    </div>
  );
}
