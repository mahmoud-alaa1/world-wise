import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import CityItem from "./CityItem";

function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  return (
    <ul className={styles.CityList}>
      {cities.map((city, i) => (
        <CityItem city={city} key={i} />
      ))}
    </ul>
  );
}

export default CityList;
