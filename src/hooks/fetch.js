import { useEffect, useState } from "react";
import axios from "../services/axios";
const useAxiosFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // declaring the function for the api call
    const getData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    // calling the the function that is responsible for the fetching the api
    getData(apiUrl);
  }, [apiUrl]);

  return { data, isLoading, error };
};
export default useAxiosFetch;
