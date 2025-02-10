import { fireEvent, render, screen } from "@testing-library/react";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

describe("Tests the checkbox group component", () => {
    test("renders Checkbox Group with checkboxes", () => {
        render(
            <CheckboxGroup name="group1" value={[]} onChange={() => {}}>
                <Checkbox value="option 1" label="Option 1" />
                <Checkbox value="option 2" label="Option 2" />
            </CheckboxGroup>
        )

        expect(screen.getByLabelText("Option 1")).toBeInTheDocument()
        expect(screen.getByLabelText("Option 2")).toBeInTheDocument()
    })

    test("Triggers on change with selected values", () => {
        const handleChange = jest.fn() // placeholder function
        render (
            <CheckboxGroup name="group1" value={[]} onChange={() => {}}>
                <Checkbox value="option 1" label="Option 1" />
                <Checkbox value="option 2" label="Option 2" />
            </CheckboxGroup>
        )

        fireEvent.click(screen.getByLabelText('Option 1'))
        expect(handleChange).toHaveBeenCalledWith(['option 1']) // checks that the checkbox function toggles on the checkbox we targeted
    })
})
