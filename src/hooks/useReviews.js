import { useEffect, useState } from "react";

const useReviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-car-parts-server-side.onrender.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);
  return [reviews, isLoading];
};

export default useReviews;
