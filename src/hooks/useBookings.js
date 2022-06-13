import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://immense-anchorage-97299.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
    setIsLoading(false);
  }, []);
  return [bookings, setBookings, isLoading];
};

export default useBookings;
