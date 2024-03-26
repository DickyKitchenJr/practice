import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("should contain a header, main, and footer", () => {
    render(<Home />);
    //there is no "header" role in getByRole, but header can be found as a "banner"
    const header = screen.getByRole("banner");
    const main = screen.getByRole("main");
    //there is no "footer" role in getByRole, but footer can be found as "contentinfo"
    const footer = screen.getByRole("contentinfo");
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
