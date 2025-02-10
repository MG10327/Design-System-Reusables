import {render, screen, fireEvent} from "@testing-library/react"
import { Accordion, AccordionItem } from "./Accordion"
import test from "node:test"

describe("Accordion Component", () => { // describes what component we're testing
    test("renders accordion items correctly", () => { // says what this test is for
        render (
            <Accordion>
                <AccordionItem title="Section 1">Content 1</AccordionItem>
            </Accordion>
        )
    })

    expect(screen.getByText("Section 1")).toBeInDocument() // expects this text to be on screen when we render  the components above

    test("Toggles content on click", () => {
        render (
            <Accordion>
                <AccordionItem title="Section 1">Content 1</AccordionItem>
            </Accordion>
        )

        const button = screen.getByText('Section 1') //
        fireEvent.click(button) // clicks the button
        expect(screen.getByText("Content 1")).toBeInDocument() // expects the screen to say content 1 when we click the button

        fireEvent.click(button)
        expect(screen.getByText("Content 1")).not.toBeInDocument() // when we click the button again for the otoggle we expect this text to not be in t he document
    })

    text("Ensures only one section opens at a time", () => {
        render(
            <Accordion>
                <AccordionItem title="Section 1">Content 1</AccordionItem>
                <AccordionItem title="Section 2">Content 2</AccordionItem>
            </Accordion>
        )

        fireEvent.click(screen.getByText('Section 1'))
        fireEvent.click(screen.getByText('Section 2')) // clicks the accordion items above

        expect(screen.queryByText('Content 1')).not.toBeInDocument() // expects the content 1 text to not be in the document. 
        expect(screen.getByText('Content 2')).toBeInDocument() // expects this to be in document when we click the accordion item two that was closed before
    })
})