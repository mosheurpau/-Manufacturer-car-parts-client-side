import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://immense-anchorage-97299.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return [bookings, setBookings];
};

export default useBookings;
