import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { loading, cities } = useCities();

  if (loading) return <Spinner />;

  if (!cities.length)
    return <Message>Add your first city by clicking on the map</Message>;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
