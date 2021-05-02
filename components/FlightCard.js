import LegDetail from "./LegDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
/**
 * FlightCard Component
 * FlightCard contains parsed info of individual itineraries and legs
 * associated with the itinerary
 *
 * Props:
 * price, String like "£35"
 * agent, String like "Wizzair.com"
 * totalLegs, list of leg objects for this itinerary like,
 *  [{ id, departure_aiport, arrival_airport, departure_time,
 *    arrival_time, stops, airline_name, airline_id, duration_mins}, ...]
 *
 * State: None
 *
 * App -> FlightCard
 *
 * Use https://logos.skyscnr.com/images/airlines/favicon/{id}.png
 * for airline logos for each leg
 **/
function FlightCard({ price, agent, totalLegs }) {
  return (
    // style={{ width: "30rem" }}
    <Card>
      {totalLegs.map((leg) => (
        <LegDetail key={leg.id} leg={leg} />
      ))}
      <Row>
        <Col>
          <Row>{price}</Row>
          <Row>{agent}</Row>
        </Col>
        <Col>
          <button>Select</button>
        </Col>
      </Row>
      <hr></hr>
    </Card>
  );
}

export default FlightCard;
