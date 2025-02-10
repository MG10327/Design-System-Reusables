import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import BreadcrumbItem from "./BreadcrumbItem";
import { BreadCrumbItemProps } from "./BreadcrumbItem.types";

// now we'll tie this to storybook
export default {
    title: "Navigation/BreadcrumbItem",
    component: BreadcrumbItem
} as Meta

const Template: StoryFn<BreadCrumbItemProps> = (args) => <BreadcrumbItem {...args} />

export const LinkItem = Template.bind({})
LinkItem.args = {
    label: "Home",
    href: '/',
    isLast: false,
    separator: '/'
}

export const ActiveItem = Template.bind({})
ActiveItem.args = {
    label: "Shoes",
    isLast: true,
    separator: "/"
}

export const CustomSeparator = Template.bind({})
CustomSeparator.args = {
    label: "Products",
    href: "/products",
    isLast: false,
    separator: ">"
}