import { render, screen, fireEvent } from "@testing-library/react"
import Alert from "./Alert"

describe('Alert Component', () => {
    test('should render the message prop', () => {
        render (<Alert message="This is an alert" type="info"></Alert>)

        expect(screen.getByText('This is an alert')).toBeInDocument()
    })

    test('should call onClose when the close button is clicked', () => {
        const handleClose = jest.fn() // placehjolder function from jest

        render(
            <Alert message="Close alert" type="info" onClose={handleClose}/>
        )
        fireEvent.click(screen.getByRole('button'))
        expect(handleClose).toHaveBeenCalledTimes(1) // when the button with the handle close function binded to it gets clicked we expect the function to have gone off
    })
})