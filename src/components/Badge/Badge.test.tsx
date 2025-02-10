import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe('Badge Component', () => {
    test('makes sure the component renders', () => {
        render(<Badge>New</Badge>)
        expect(screen.getByAltText('New')).toBeInDocument()
    })

    test('should apply the correct color class based on the color prop', () => {
        render(<Badge color="secondary">New</Badge>)
        const badge = screen.getByText('New')
        expect(badge).toHaveClass('secondary')
    })

    test('makes sure the proper size class gets applied on prop change', () => {
        render (<Badge size="small">New</Badge>)
        const badge = screen.getByText('New')
        expect(badge).toHaveClass('small')
    })
})