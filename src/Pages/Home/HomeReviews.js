import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Review from "./Review";
import { Link } from "react-router-dom";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://manufacturer-car-parts-server-side.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse().slice(0, 9)));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-28">
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
      <div className="grid justify-items-center mt-10">
        <div>
          {" "}
          <Link to="/reviews">
            <button className="btn btn-wide btn-primary font-bold px-5 uppercase">
              All Review
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
