import { render } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("Checkbox snapshot test", () => {
    const {asFragment} = render(<Checkbox id="test-id" label="Test Label" checked={false} onChange={() => {}} disabled={false} className="test-class" />)
    expect(asFragment()).toMatchSnapshot()
})

