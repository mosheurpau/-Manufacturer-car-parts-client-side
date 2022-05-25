import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/part")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return [bookings, setBookings];
};

export default useBookings;
