import React from "react";
import { render } from "@testing-library/react";
import LegDetail from "./LegDetail";

describe("LegDetail smoke and snapshot tests", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      leg: {
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
    };
  });

  it("should render correctly", () => {
    render(<LegDetail {...expectedProps} />);
  });

  it("matches LegDetail snapshot", () => {
    const { asFragment } = render(<LegDetail {...expectedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
