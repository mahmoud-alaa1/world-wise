import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:6874/cities";

function CitiesProvider({ children }) {
  const { data: cities, error, loading, setLoading, setError } = useFetch(BASE_URL);
  const [currentCity, setCurrentCity] = useState({});

  async function getCity(id) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/${id}`);
      const res = await response.json();
      setCurrentCity(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        loading,
        cities,
        error,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
