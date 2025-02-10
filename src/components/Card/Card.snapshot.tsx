import React from "react";
import { render,  } from "@testing-library/react";
import Card from "./Card";

test("Makes sure the DOM output of Card doesn't change when we render this component", () => {
    const {asFragment} = render(<Card variant="basic" className="Test">New Card</Card>)
    expect(asFragment()).toMatchSnapshot()
})

test("Makes sure that the DOM output of the card component doesn't change when we use a variant", () => {
    const {asFragment} = render(<Card variant="outlined" className="Test">New Card</Card>)
    expect(asFragment()).toMatchSnapshot()
})

