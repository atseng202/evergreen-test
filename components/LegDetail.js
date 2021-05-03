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
    <Container>
      <Row className="pt-2 pl-3 pr-3 my-auto">
        <Col xs={8}>
          {/* Row with airplane icon, departure, arrow, arrival */}
          <Row>
            <img
              className="pr-3"
              style={{ width: "3rem", height: "3rem" }}
              src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
            />
            {/* Disable growing for the departure time and aiprot */}
            <Col className="flex-grow-0 pr-5">
              <Row className="py-1">{formattedDepartureDate + "\n"}</Row>
              <Row>{leg.departure_airport}</Row>
            </Col>
            <img
              className="my-auto"
              style={{ width: "1.5rem", height: "1.5rem" }}
              src="/long-arrow-right.svg"
            />
            <Col className="flex-grow-0 pl-5">
              <Row className="py-1">{formattedArrivalDate + "\n"}</Row>
              <Row>{leg.arrival_airport}</Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-end py-1">{`${hours}h ${minutes}`}</Row>
          <Row className="justify-content-end">
            {leg.stops >= 1 ? leg.stops + " Stop(s)" : "Direct"}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LegDetail;
