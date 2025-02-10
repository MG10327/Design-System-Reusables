import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe('Tests the button component', () => {
    test('makes sure the button component renders correctly with app props added', () => {
        render(<Button variant="primary" size="lg">Click me</Button>)
        const button = screen.getByText("Click me")

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('primary')
        expect(button).toHaveClass('lg')
    })

    test('Calls onClick function when clicked', () => {
        const handleClick = jest.fn() // placeholder function
        render(<Button onClick={handleClick}>Click me</Button>)
        const button = screen.getByText('Click Me')
        fireEvent.click(button)
        expect(handleClick).ToHaveBeenCalledTimes(1) // expects the functino to have gone off after the button the function is attached to is clicked
    })

    test("Disabled button does not fire events", () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick} disabled>Click Me</Button>)
        const button = screen.getByText('Click Me')
        fireEvent.click(button)
        expect(handleClick).not.toHaveBeenCalled() // expects the function attached to the button to not go off when the button is lcicked while disabled
    })
})