import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.types";

test("Makes sure the DOM output of the Carousel component doesn't change on render", () => {
    const {asFragment} = render(<Carousel className="Test" variant="basic">New Carousel</Carousel>)
    expect(asFragment()).toMatchSnapshot()
})
