import LegDetail from "./LegDetail";
import styles from "../styles/FlightCard.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
    <>
      <style type="text/css">
        {`
        .btn-custom {
          background-color: #00a698;
          color: white;
        }
      `}
      </style>
      <Card className={styles.FlightCard}>
        {totalLegs.map((leg) => (
          <LegDetail key={leg.id} leg={leg} />
        ))}
        <Container className="pt-3">
          <Row className="px-3 pb-3 justify-content-end">
            <Col>
              <Row className="font-weight-bold">
                <h2 className="mb-0">{price}</h2>
              </Row>
              <Row
                className={`${styles.FlightCard__agentText} text-secondary font-weight-light`}
              >
                {agent}
              </Row>
            </Col>
            <Col className="">
              <Row className="justify-content-end pr-2 pt-3">
                <Button variant="custom" size="lg" className="px-5">
                  <h4 className="my-0">Select</h4>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default FlightCard;
