import styles from "../styles/LegDetail.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
/**
 * LegDetail Component
 * Shows the departure and destination airport leg info
 *
 * Props:
 * leg, object like:
 *  {id, departure_aiport, arrival_airport, departure_time,
 *    arrival_time, stops, airline_name, airline_id, duration_mins}
 *
 * State: None
 *
 * FlightCard -> LegDetail
 *
 * Use https://logos.skyscnr.com/images/airlines/favicon/{id}.png
 * for airline logos for each leg
 **/
function LegDetail({ leg }) {
  /**
   * Custom helper method to add leading 0 for hours and minutes
   * less than 0
   **/
  function formatZeros(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  /**
   * Helper method returns text regarding number of stops
   * for this leg
   */
  function getStopsText(leg) {
    if (leg.stops == 0) {
      return "Direct";
    } else if (leg.stops == 1) {
      return leg.stops + " Stop";
    } else {
      return leg.stops + " Stops";
    }
  }

  const hours = Math.floor(leg.duration_mins / 60);
  const minutes = leg.duration_mins % 60;

  // Converting datetime string to presentational time
  const departureDate = new Date(leg.departure_time);
  const arrivalDate = new Date(leg.arrival_time);

  const formattedDepartureDate =
    formatZeros(departureDate.getHours()) +
    ":" +
    formatZeros(departureDate.getMinutes());

  const formattedArrivalDate =
    formatZeros(arrivalDate.getHours()) +
    ":" +
    formatZeros(arrivalDate.getMinutes());

  return (
    <Container className={styles.LegDetail}>
      <Row className="pt-2 pl-3 pr-3 my-auto">
        <Col xs={10}>
          {/* Row with airplane icon, departure, arrow, arrival */}
          <Row className={styles.LegDetail__dateInfo}>
            <img
              className={`pr-2 my-auto ${styles.LegDetail__airlineLogo}`}
              src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
              alt={leg.airline_id}
            />
            {/* Disable growing for the departure time and aiprot */}
            <Col className="flex-grow-0 pr-4">
              <Row className="py-1">{formattedDepartureDate + "\n"}</Row>
              <Row className="font-weight-light">{leg.departure_airport}</Row>
            </Col>
            <img
              className={styles.LegDetail__arrowRight}
              src="/long-arrow-right.svg"
              alt="arrow-right"
            />
            <Col className="flex-grow-0 pl-4">
              <Row className="py-1">{formattedArrivalDate + "\n"}</Row>
              <Row className="font-weight-light">{leg.arrival_airport}</Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-end py-2 font-weight-light">{`${hours}h ${minutes}`}</Row>
          <Row
            className={`justify-content-end ${
              leg.stops > 0
                ? styles.LegDetail__oneOrMoreStops
                : styles.LegDetail__noStops
            }`}
          >
            {getStopsText(leg)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LegDetail;
