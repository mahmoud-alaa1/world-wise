import { Children, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:6874/cities";

function CitiesProvider({ children }) {
  const { loading, error, data: cities } = useFetch(BASE_URL);
  return (
    <CitiesContext.Provider value={{ cities, loading, error }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("This element is outside the provider");
    console.log(context);

  return context;
}

export { CitiesProvider, useCities };
