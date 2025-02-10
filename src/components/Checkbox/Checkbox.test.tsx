import React from "react";
import {fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Tests the Checkbox component", () => {
    test("Makes sure the component renders with all optional and required props", () => {
        render(<Checkbox id="TestId" label="Test Label" checked={false} onChange={() => {}} disabled={false} className="Test"/>)
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    })

    test("Makes sure that the component uses its on click function when its checkbox is clicked", () => {
        const handleCheckbox = jest.fn()
        render(<Checkbox id="TestId" label="Test Label" checked={false} onChange={handleCheckbox} disabled={false} className="Test" />)
        const checkbox = screen.getByLabelText('Test Label')
        fireEvent.click(checkbox)
        expect(handleCheckbox).toHaveBeenCalled()
    })

    test("Checkbox should be disabled when the disabled prop is true", () => {
        render(<Checkbox id="test-checkbox" label="Test Checkbox" checked={false} onChange={() => {}} disabled  />)
        const checkbox = screen.getByLabelText('Test Checkbox')
        expect(checkbox).toBeDisabled()
    })
})