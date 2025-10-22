import { useState } from "react";

const useServiceData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch("/service.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(setLoading(false));
  };
  return { data, fetchData, loading };
};

export default useServiceData;
