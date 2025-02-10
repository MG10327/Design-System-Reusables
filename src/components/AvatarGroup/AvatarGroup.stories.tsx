import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import AvatarGroup from "./AvatarGroup";
import { AvatarGroupProps } from "./AvatarGroup.types";

export default { // first we setup our export to Storybook to make this component visible there
    title: 'Components/AvatarGroup',
    component: AvatarGroup
} as Meta

const Template: StoryFn<AvatarGroupProps> = (args) => <AvatarGroup {...args} /> // makes the args visible that we'll define below

export const DefaultAvatarGroup = Template.bind({}) // binds this component to story book so it's visible there
DefaultAvatarGroup.args = {
    avatars: [
        {src: 'avatar1.jpg', alt: "User 1"},
        {src: 'avatar2.jpg', alt: "User 2"},
        {src: 'avatar3.jpg', alt: "User 3"},
    ]
}

export const AvatarGroupWithTwoAvatars = Template.bind({})
AvatarGroupWithTwoAvatars.args = {
    avatars: [
        {src: 'avatar1.jpg', alt: "User 1"},
        {src: 'avatar2.jpg', alt: "User 2"},
    ]
}