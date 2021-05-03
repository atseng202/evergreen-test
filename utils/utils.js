/**
 * Custom helper method to add leading 0 for hours and minutes
 * less than 0
 * @param {number} time
 * @returns String
 */
function formatZeros(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

/**
 * Helper method returns text regarding number of stops
 * for this leg
 * @param {Object} leg, like:
 *  {id, departure_aiport, arrival_airport, departure_time,
 *    arrival_time, stops, airline_name, airline_id, duration_mins}
 * @returns String
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

module.exports = {
  formatZeros,
  getStopsText,
};
