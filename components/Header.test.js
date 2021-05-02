import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header smoke and snapshot tests", () => {
  it("should render correctly", () => {
    render(<Header />);
  });

  it("matches Header snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
