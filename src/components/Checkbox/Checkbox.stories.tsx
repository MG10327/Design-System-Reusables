import { StoryFn, Meta } from "@storybook/react/*";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

// now we tie the component to storybook
export default {
    title: "Form Elements/Checkbox",
    component: Checkbox,
    argTypes: {
        checked: {control: "boolean"},
        disabled: {control: "boolean"}
    }
} as Meta

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} /> // Makes the args we define below visible in storybook

export const DefaultCheckbox = Template.bind({}) // makes this visible in storybook
DefaultCheckbox.args = {
    id: "checkbox-1",
    label: "Checkbox label",
    checked: false,
    onChange: () => {} // placeholder function
}

export const Disabled = Template.bind({})
Disabled.args = {
    id: "checkbox-2",
    label: "Checkbox label",
    checked: false,
    onChange: () => {},
    disabled: true
}