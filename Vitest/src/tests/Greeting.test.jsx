import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";

describe("Greeting", () => {
  it("should render Hello with the name if name is true", () => {
    render(<Greeting name="Dicky" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/dicky/i);
  });

  it("should render a button if name is false", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
