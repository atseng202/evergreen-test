import Head from "next/head";
import styles from "../styles/Home.module.css";

import App from "../components/App";

import flights from "../public/flights.json";

/**
 * Home page component
 * Displays contents of home page at index route "/"
 * Will populate with flights API data
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
 * MyApp -> Home
 **/
function Home({ itineraries, legs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App itineraries={itineraries} legs={legs} />
    </div>
  );
}

/**
 * Function provides initial flights API data to props before loading page
 * getStaticProps is called at build time on server-side
 **/
export async function getStaticProps() {
  const { itineraries, legs } = flights;
  // converting legs into a Set to parse the leg ids faster for
  // each itinerary
  const legsSet = {};
  for (let leg of legs) {
    legsSet[leg.id] = leg;
  }
  return {
    props: {
      itineraries,
      legs: legsSet,
    },
    // could revalidate every n seconds below or when new request comes in
    // revalidate: 1,
  };
}

export default Home;
