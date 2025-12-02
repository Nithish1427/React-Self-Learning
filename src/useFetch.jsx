import { useState, useEffect } from "react";

const useFetch = (url) => {
  // const [courses, setCourses] = useState(null);
  const [data, setData] = useState(null); // changed courses into data

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't retrieve data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return [data, error];
};

export default useFetch;

// Custom Hook - for code reusability and reducing code redundancy
