// import BpkText from "bpk-component-text";

import Header from "./Header";

import styles from "../styles/App.module.scss";

import FlightCard from "./FlightCard";
import Container from "react-bootstrap/Container";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

/**
 * App Component
 * General container component for Header and FlightCards at "/" route
 *
 * Props:
 * itineraries, a list of itinerary objects like,
 *  [{ id, legs, price, agent, agent_rating}, ...]
 * legs, a list of leg objects like,
 *  [{ id, departure_aiport, arrival_airport, departure_time,
 *    arrival_time, stops, airline_name, airline_id, duration_mins}, ...]
 *
 * State: None
 *
 * Home -> App
 **/
function App({ itineraries, legs }) {
  function parseItineraries() {
    return itineraries.map((itinerary) => {
      // legs prop is a Set making it faster to find the
      // corresponding leg for each id
      const totalLegs = itinerary.legs.map((legId) => legs[legId]);

      const { id, price, agent } = itinerary;

      return (
        <FlightCard
          key={id}
          price={price}
          agent={agent}
          totalLegs={totalLegs}
        />
      );
    });
  }

  return (
    <Container className={styles.App}>
      <Header />
      {/* NOTE: changed from class "main" to "Container" */}
      <Container className={styles.App__main}>
        {/* <BpkText tagName="p">Over to you...</BpkText> */}
        {parseItineraries()}
      </Container>
    </Container>
  );
}

export default App;
