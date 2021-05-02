import LegDetail from "./LegDetail";
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
    <div>
      {totalLegs.map((leg) => (
        <LegDetail key={leg.id} leg={leg} />
      ))}
      <br></br>
      {price}
      <br></br>
      {agent}
      <br></br>
      <button>Select</button>
      <hr></hr>
    </div>
  );
}

export default FlightCard;
