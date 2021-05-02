import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App smoke and snapshot tests", () => {
  let expectedProps;
  let legs = beforeEach(() => {
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
    render(<App {...expectedProps} />);
  });

  it("matches App snapshot", () => {
    const { asFragment } = render(<App {...expectedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
