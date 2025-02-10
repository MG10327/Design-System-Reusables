import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
    title: "Components/Avatar", // where this component will be nested in storybook
    component: Avatar, // the component that will be put in storybook
    argTypes: {
        border: {control: 'boolean'}
    }
} as Meta

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args}/>  // this is what will make our component in storybook take the args we set below

export const SmallAvatar = Template.bind({}) // makes our component visible in storybook for documentation
SmallAvatar.args = {
    src: 'avatar.jpg',
    alt: 'Small avatar',
    size: 'small'
}

export const MediumAvatar = Template.bind({})
MediumAvatar.args = {
    src: 'avatar.jpg',
    alt: 'Medium avatar',
    size: 'medium'
}

export const LargeAvatar = Template.bind({})
LargeAvatar.args = {
    src: 'avatar.jpg',
    alt: 'Large avatar',
    size: 'large'
}

export const AvatarWithBorder = Template.bind({})
AvatarWithBorder.args = {
    src: 'avatar.jpg',
    alt: 'Avatar with border',
    size: 'medium',
    border: true // our types define what goes here, a boolean true false value
}
