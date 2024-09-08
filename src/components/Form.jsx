// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useGeolocation } from "../hooks/useGeolocation";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import Message from "./Message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?";
function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const { data, error, loading, setLoading, setError } = useFetch(
    BASE_URL + `latitude=${lat}&longitude=${lng}`
  );

  function handleSubmit(e) {
    e.preventDefault();
    const { city, countryName } = data;
    if (!city || !date) return;
    const emoji = convertToEmoji(data.countryCode);
    const newCity = {
      cityName: city,
      country: countryName,
      date,
      notes,
      emoji,
      position: { lat, lng },
    };
    console.log(newCity);
  }

  if (loading) return <Spinner />;
  if (error)
    return <Message>There is an error while loading the map position</Message>;
  if (!lat && !lng)
    return (
      <Message>Start adding your visited cities by clicking on the map</Message>
    );
  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={data.city || data.locality || ""}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">
          When did you go to {data.city || data.localCity || ""}?
        </label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">
          Notes about your trip to {data.city || data.localCity || ""}
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={`primary`}>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
