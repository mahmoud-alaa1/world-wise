import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import useFetch from "./hooks/useFetch";

const BASE_URL = "http://localhost:6874/cities";

function App() {
  const { loading, error, data: cities } = useFetch(BASE_URL);
  console.log(cities);
  console.log(loading);
  console.log(error);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} loading={loading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} loading={loading} />}
          />
          <Route path="countries" element={<p>List of counteries</p>}></Route>
          <Route path="form" element={<p>form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
