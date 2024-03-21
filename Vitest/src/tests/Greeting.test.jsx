import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import Greeting from "../components/Greeting";

describe("Greeting", () => {
  it("should render Hello with the name if name is true", () => {
    render(<Greeting name="Dicky" />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
