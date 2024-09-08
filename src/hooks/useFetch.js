import { useEffect, useState } from "react";

export default function useFetch(url, dispatch = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        if (dispatch) dispatch({ type: "loading" });
        else setLoading(true);
        const response = await fetch(url);
        const res = await response.json();
        if (dispatch) dispatch({ type: "load cities", payload: res });
        else setData(res);
      } catch (err) {
        if (dispatch) dispatch({ type: "rejected", payload: err });
        else setError(err);
      } finally {
        if (dispatch) dispatch({ type: "loaded" });
        else setLoading(false);
      }
    }
    if (!url.includes("null")) getData();
  }, [url]);

  return { data, setData, error, loading, setLoading, setError };
}
