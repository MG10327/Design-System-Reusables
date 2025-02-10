import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

// now we setup our Storybook import
export default {
    title: "Component/Badge",
    component: Badge,
} as Meta

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {
    children: "New"
} // Adds these variants to storybook so they're visible there and customizable

export const SecondaryBadge = Template.bind({})
SecondaryBadge.args = {
    children: "Updated",
    color: "secondary"
}

export const SmallBadge = Template.bind({})
SmallBadge.args = {
    children: "New",
    size: 'small'
}
