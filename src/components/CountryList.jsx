import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { loading, cities } = useCities();
  if (loading) return <Spinner />;

  if (!cities.length)
    return <Message>Add your first city by clicking on the map</Message>;

  const countries = cities.reduce((curr, current) => {
    const countryExists = curr.find((city) => city.country === current.country);
    if (!countryExists) {
      curr.push(current);
    }
    return curr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
