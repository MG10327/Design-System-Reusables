import React from "react";
import { StoryFn, Meta } from "@storybook/react/*";
import { BreadcrumbProps } from "./Breadcrumb.types";
import Breadcrumb from "./Breadcrumb";

// now we'll tie our component to a storybook route
export default {
    title: "Navigation/Breadcrumb",
    component: Breadcrumb
} as Meta

const Template: StoryFn<BreadcrumbProps>  = (args) => <Breadcrumb {...args} />

export const DefaultBreadcrumb = Template.bind({}) // makes our component visible in storybook
DefaultBreadcrumb.args = {
    items: [
        {label: 'Home', href: '/'},
        {label: 'Product', href: '/products'},
        {label: 'Shoes'},
    ]
}

export const CustomSeparator = Template.bind({})
CustomSeparator.args = {
    items: [
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'Electronics' },
      ],
      separator: '→'
}