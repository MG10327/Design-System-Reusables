import {render} from "@testing-library/react"
import { Accordion, AccordionItem } from "./Accordion"

test("Accordion component snapshot", () => {
    const {asFragment} = render (
        <Accordion>
            <AccordionItem title="Test item">Test Content</AccordionItem>
        </Accordion>
    )

    expect(asFragment()).toMatchSnapshot() // detects unintended ui changes so the design system deosn't break
})