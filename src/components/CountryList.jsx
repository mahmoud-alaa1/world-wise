import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, loading }) {
  if (loading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add your first city by clicking on the map"} />;

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
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;
