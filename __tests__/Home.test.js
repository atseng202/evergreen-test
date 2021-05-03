import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home smoke and snapshot tests", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      itineraries: [
        {
          id: "it_1",
          legs: ["leg_1", "leg_4"],
          price: "£35",
          agent: "Wizzair.com",
          agent_rating: 9.1,
        },
      ],
      legs: {
        leg_1: {
          id: "leg_1",
          departure_airport: "BUD",
          arrival_airport: "LTN",
          departure_time: "2020-10-31T15:35",
          arrival_time: "2020-10-31T17:00",
          stops: 0,
          airline_name: "Wizz Air",
          airline_id: "WZ",
          duration_mins: 145,
        },
        leg_4: {
          id: "leg_4",
          departure_airport: "LTN",
          arrival_airport: "BUD",
          departure_time: "2020-11-11T19:45",
          arrival_time: "2020-11-11T21:10",
          stops: 0,
          airline_name: "Wizz Air",
          airline_id: "WZ",
          duration_mins: 145,
        },
      },
    };
  });

  it("should render correctly", () => {
    render(<Home {...expectedProps} />);
  });

  it("matches Home snapshot", () => {
    const { asFragment } = render(<Home {...expectedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the correct flight information", () => {
    const { getByText, getByAltText, getAllByText, getAllByAltText } = render(
      <Home {...expectedProps} />
    );

    const { itineraries, legs } = expectedProps;
    // WZ id is found twice, as it is the airline id for leg 1 and 4
    const WZList = getAllByAltText(legs.leg_1.airline_id);
    const BUDList = getAllByText(legs.leg_1.departure_airport);
    const LTNList = getAllByText(legs.leg_1.arrival_airport);
    const departureTime1 = getByText("15:35");
    const arrivalTime1 = getByText("17:00");
    const durationList = getAllByText("2h 25");
    const stopsList = getAllByText("Direct");
    const price = getByText(itineraries[0].price);
    const agent = getByText(itineraries[0].agent);

    // for the alt text airline id, there should be 2 above
    for (let ele of WZList) {
      expect(ele).toBeVisible();
    }

    // will find "BUD" twice, leg 1 departure and leg 4  arrival
    for (let ele of BUDList) {
      expect(ele).toBeVisible();
    }

    // will find "LTN" twice, leg 1 arrival and leg 4 departure
    for (let ele of LTNList) {
      expect(ele).toBeVisible();
    }

    // for this test, both duration_mins are 145 min so 2hr 25 is found twice
    for (let ele of durationList) {
      expect(ele).toBeVisible();
    }

    // both legs also have 0 stops, so we have a list of elements
    for (let ele of stopsList) {
      expect(ele).toBeVisible();
    }

    expect(departureTime1).toBeVisible();
    expect(arrivalTime1).toBeVisible();
    expect(price).toBeVisible();
    expect(agent).toBeVisible();
  });
});
