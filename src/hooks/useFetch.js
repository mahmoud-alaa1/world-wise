import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const res = await response.json();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    if (!url.includes("null")) getData();
  }, [url]);

  return { data, error, loading, setLoading, setError };
}
