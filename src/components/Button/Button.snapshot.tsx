import React from "react";
import Button from "./Button";

test('Makes sure the dom output doesnt change when the button component renders', () => {
    const {asFragment} = render(<Button size="lg" variant="primary">Click Me</Button>)
    expect(asFragment()).toMatchSnapshot()
})