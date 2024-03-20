import React from "react";
import Loading from "../Shared/Loading";
import Review from "../Home/Review";
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
  const [reviews, isLoading] = useReviews();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mb-28 mt-10 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="lg:text-5xl text-4xl mb-10 font-bold text-primary">
          What our Customer say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
