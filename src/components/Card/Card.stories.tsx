import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import Card from "./Card";
import { CardProps } from "./Card.types";

// now we tie this component to storybook
export default {
    title: "Components/Card",
    component: Card
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({}) // makes this visible in storybook
Default.args = {
    children: "Default Card"
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: "Outlined Card",
    variant: "outlined"
}

export const Elevated = Template.bind({})
Elevated.args = {
    children: "Elevated Card",
    variant: "elevated"
}