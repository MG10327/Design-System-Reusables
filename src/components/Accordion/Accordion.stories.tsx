import { Accordion, AccordionItem } from "./Accordion";
import {Meta, StoryFn} from "@storybook/react"

export default {
    title: "Components/Accordion",
    component: Accordion,
} as Meta

const Template: StoryFn = () => (
    <Accordion>
        <AccordionItem title="First Item">First Item</AccordionItem>
        <AccordionItem title="Second Item">Second Item</AccordionItem>
    </Accordion>
)

export const Default = Template.bind({})

// Sets up our accordion component to be visible in storybook for testing and documentation.

