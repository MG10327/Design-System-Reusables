import React from "react";
import {StoryFn , Meta} from '@storybook/react'
import Alert from "./Alert";
import { AlertProps } from "./Alert.types";

export default {
    title: "Components/Alert", // where the component will be nested in storybook for testing and documentation
    component: Alert,
    argTypes: {
        onClose: {action: 'closed'}
    }
} as Meta

const Template: StoryFn<AlertProps> = (args) => <Alert {...args}/>

export const InfoAlert = Template.bind({})
InfoAlert.args = {
    message: "This is an info alert",
    type: "info"
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
    message: "This is a warning alert",
    type: "warning"
}

export const ErrorAlert = Template.bind({}) // Makes our components visible and customizable in storybook
ErrorAlert.args = {
    message: "This is an error alert",
    type: "error"
}