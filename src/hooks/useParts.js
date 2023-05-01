import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://manufacturer-car-parts-server-side.onrender.com/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
    setIsLoading(false);
  }, []);
  return [parts, setParts, isLoading];
};

export default useParts;
