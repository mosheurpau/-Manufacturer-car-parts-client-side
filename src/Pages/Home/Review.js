import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 glass hover:bg-gray-300 hover:scale-110 hover:duration-500">
      <div className="card-body">
        <p>{review.review}</p>

        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="profile" />
            </div>
          </div>

          <div>
            <h4 className="text-xl">{review.name}</h4>
            <Rating
              initialRating={review.retting}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "#FF5400" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
