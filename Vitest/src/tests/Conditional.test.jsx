import React from "react";
import { queryByRole, render, screen } from "@testing-library/react";
import Conditional from "../components/Conditional";

describe("Conditional", () => {
    it("should display a h1 with True if given a value for bool, but no p element", () => {
        render(<Conditional bool="true" />)
        const shown = screen.getByRole("heading");
        //can't use getByRole because it will throw an error since it isn't found
        const notShown = screen.queryByRole("paragraph");
        expect(shown).toBeInTheDocument();
        expect(shown).toHaveTextContent(/true/i);
        expect(notShown).not.toBeInTheDocument();
    })
} )