import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Test the carousel component", () => {
    test('Renders the carousel component', () => {
        render(<Carousel variant="basic" className="Test">Test Carousel</Carousel>)
        const carousel = screen.getByText(/Test carousel/i)
        expect(carousel).toBeInTheDocument()
    })

    test("Renders the outlined variant", () => {
        render(<Carousel variant="outlined" className="test">Test Carousel</Carousel>)
        const carousel = screen.getByText(/Test Carousel/i)
        expect(carousel).toHaveClass()
    })
})