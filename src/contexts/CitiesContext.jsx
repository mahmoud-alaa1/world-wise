import { createContext, useContext, useReducer } from "react";
import useFetch from "../hooks/useFetch";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:6874/cities";

const initialState = {
  cities: [],
  loading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };

    case "loaded":
      return { ...state, loading: false };

    case "load cities":
      return { ...state, cities: action.payload };

    case "city/loaded":
      return { ...state, currentCity: action.payload };
    case "cities/created":
      return { ...state, cities: [...state.cities, action.payload] };

    case "cities/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case "rejected":
      return { ...state, loading: false, error: action.payload.message };

    default:
      throw new Error("Unknow action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, loading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useFetch(BASE_URL, dispatch);

  async function getCity(id) {
    try {
      dispatch({ type: "loading" });
      const response = await fetch(`${BASE_URL}/${id}`);
      const res = await response.json();
      dispatch({ type: "city/loaded", payload: res });
    } catch (err) {
      dispatch({ type: "rejected", payload: err });
    } finally {
      dispatch({ type: "loaded" });
    }
  }
  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      dispatch({ type: "cities/created", payload: res });
    } catch (err) {
      dispatch({ type: "rejected", payload: err });
    } finally {
      dispatch({ type: "loaded" });
    }
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "cities/deleted", payload: id });
    } catch (err) {
      dispatch({ type: "rejected", payload: err });
    } finally {
      dispatch({ type: "loaded" });
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
