import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import CityItem from "./CityItem";

function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city, i) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
