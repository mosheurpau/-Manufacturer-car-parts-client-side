import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://immense-anchorage-97299.herokuapp.com/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
    setIsLoading(false);
  }, []);
  return [parts, setParts, isLoading];
};

export default useParts;
