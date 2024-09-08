import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:6874/cities";

function CitiesProvider({ children }) {
  const {
    data: cities,
    error,
    loading,
    setLoading,
    setError,
    setData: setCities,
  } = useFetch(BASE_URL);
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
  async function createCity(newCity) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      setCities((cities) => [...cities, res]);
    } catch (err) {
      setError("THERE WAS AN ERROR CREATING THE CITY", err);
    } finally {
      setLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setLoading(true);
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      setError("THERE WAS AN ERROR DELETING THE CITY", err);
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
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
