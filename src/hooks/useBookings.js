import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://manufacturer-car-parts-server-side.onrender.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
    setIsLoading(false);
  }, []);
  return [bookings, setBookings, isLoading];
};

export default useBookings;
