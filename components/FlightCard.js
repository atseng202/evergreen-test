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
   * Custom helper method to parse and return the Leg component
   * for each list of legs associated with this itinerary
   **/
  function parseLegs() {
    return totalLegs.map((leg) => {
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
        <div key={leg.id}>
          <img
            src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
          ></img>
          <div>
            {formattedDepartureDate + "\n"}
            <br></br>
            {leg.departure_airport}
          </div>
          <br></br>
          <div>
            {formattedArrivalDate + "\n"}
            <br></br>
            {leg.arrival_airport}
          </div>
          <br></br>
          <div>
            {`${hours}h ${minutes}`}
            <br></br>
            {leg.stops > 1 ? leg.stops + " Stops" : "Direct"}
          </div>
          {/* {leg.airline_id} */}
        </div>
      );
    });
  }

  return (
    <div>
      {parseLegs()}
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
