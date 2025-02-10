import { render } from "@testing-library/react";
import Alert from "./Alert";

test('should match the snapshot for info alert', () => {
    const {asFragment} = render(<Alert message="This is an info alert" type="info"/>)
    expect(asFragment()).toMatchSnapshot()
})

test('should match the snapshot for error alert', () => {
    const {asFragment} = render(<Alert message="This is an error alert" type="error"/>)
    expect(asFragment()).toMatchSnapshot()
})

test('should match the snapshot for a warning alert', () => {
    const {asFragment} = render(<Alert message="This is a warning alert" type="warning" />)
    expect(asFragment()).toMatchSnapshot()
})