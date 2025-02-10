import { StoryFn, Meta } from '@storybook/react';
import Collapsible from './CommandBar';
import { CollapsibleProps } from './CommandBar.types';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta;

const Template: StoryFn<CollapsibleProps> = (args) => <Collapsible {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is some collapsible content.',
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  children: 'This content is already expanded.',
};

export const WithToggleCallback = Template.bind({});
WithToggleCallback.args = {
  children: 'Click to toggle visibility.',
  onToggle: () => console.log('Collapsible toggled'),
};
