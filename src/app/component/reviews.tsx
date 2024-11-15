// pages/reviews.tsx
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const reviews = [
    {
      profileImageSrc: "/images/review1.png",
      image: "/images/p1.png",
      name: "Jane Doe",
      rating: 5,
      reviewText: "This product is amazing! The quality and design are top-notch.",
    },
    {
      profileImageSrc: "/images/review2.png",
      image: "/images/p2.png",
      name: "John Smith",
      rating: 4,
      reviewText: "Really good, but I expected a bit more based on the price.",
    },
    {
      profileImageSrc: "/images/review3.png",
      image: "/images/p3.png",
      name: "Emily Johnson",
      rating: 5,
      reviewText: "Excellent customer service and fast shipping!",
    },
  ];

  return (
    <div className="container mx-auto py-44">
    <p className="text-orange-600 font-bold flex justify-center">TESTIMONIALS</p>
    <p className="text-black text-3xl font-bold flex justify-center">Our Client Reviews</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            profileImageSrc={review.profileImageSrc}
            image={review.image}
            name={review.name}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </div>
  );
}
