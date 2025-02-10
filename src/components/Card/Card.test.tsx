import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Tests the card component", () => {
    test("makes sure the card component renders with all required and optional props", () => {
        render(<Card className="Test" variant="basic"  >New Card</Card>)
        expect(screen.getByText("New Card")).toBeInTheDocument()
    })

    test("Makes sure that the card renders as expected without its optional class name prop ", () => {
        render(<Card variant="basic">New Card</Card>)
        expect(screen.getByText('New Card')).toBeInTheDocument()
    })

    test("Makes sure the card renders as expected without its optional variant prop", () => {
        render(<Card className="Test-class">New Card</Card>)
        expect(screen.getByText('New Card')).toBeInTheDocument()
    })

    test("Makes sure the variant classname gets applied", () => {
        render(<Card className="Test" variant="outlined">New Card</Card>)
        expect(screen.getByText("New Card")).toHaveClass('outlined')
    })
})