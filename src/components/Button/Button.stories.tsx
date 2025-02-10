import React from "react"
import {StoryFn, Meta} from "@storybook/react"
import Button from "./Button"
import {ButtonProps} from "./Button.types"

// now we'll tie this to storybook
export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {control: 'select' , options: ['primary', 'secondary', 'outline', 'danger']},
        size: {control: 'select', options: ['sm', 'md', 'lg']},
        disabled: {control: 'boolean'},
    }
} as Meta

// Template that gets used across stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

// now we setup our variants
export const Primary = Template.bind({})
Primary.args = {
    children: "Click Me",
    variant: "primary",
    size: "md"
}

export const Secondary = Template.bind({}) // makes this component variant visible in storybook
Secondary.args = {
    children: "Click Me",
    variant: "secondary",
}

export const Outline = Template.bind({})
Outline.args = {
    children: "Click Me",
    variant: "outline"
}

export const Danger = Template.bind({})
Danger.args = {
    children: "Click Me",
    variant: "danger"
}