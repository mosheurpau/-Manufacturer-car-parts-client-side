import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://immense-anchorage-97299.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-28">
      <div className="text-center">
        <h2 className="text-3xl mb-5 font-bold text-primary">
          What our Customer say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews
          .slice(2)
          .reverse()
          .map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
      </div>
    </section>
  );
};

export default Reviews;
