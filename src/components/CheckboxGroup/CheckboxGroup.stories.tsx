import { StoryFn, Meta } from "@storybook/react/*";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "../Checkbox/Checkbox";

export default {
  title: 'Form Elements/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    value: { control: 'array' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn = (args) => (
    <CheckboxGroup {...args}>
      <Checkbox value="option1" label="Option 1" />
      <Checkbox value="option2" label="Option 2" />
      <Checkbox value="option3" label="Option 3" />
    </CheckboxGroup>
  );
  
  export const Default = Template.bind({});
  Default.args = {
    name: 'group1',
    value: [],
  };
  
  export const SelectedValues = Template.bind({});
  SelectedValues.args = {
    name: 'group1',
    value: ['option1', 'option3'],
  };