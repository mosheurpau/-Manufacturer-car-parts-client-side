import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
    setIsLoading(false);
  }, []);
  return [parts, setParts, isLoading];
};

export default useParts;
