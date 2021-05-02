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
    <div>
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
        {leg.stops >= 1 ? leg.stops + " Stop(s)" : "Direct"}
      </div>
    </div>
  );
}

export default LegDetail;
