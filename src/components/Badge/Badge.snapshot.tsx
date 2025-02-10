import React from "react";
import { render } from "@testing-library/react";
import Badge from "./Badge";

test("Make sure the badge DOM output didn't change on render", () => {
    const {asFragment} = render(<Badge >New</Badge>)
    expect(asFragment()).toMatchSnapShot()
})

test("Makes sure that the color class gets applied correctly", () => {
    const {asFragment} = render(<Badge color="primary">New</Badge>)
    expect(asFragment()).toMatchSnapShot()
})

test("Makes sure that the size class gets applied correctly", () => {
    const {asFragment} = render(<Badge size="small">New</Badge>)
    expect(asFragment()).toMatchSnapShot()
})