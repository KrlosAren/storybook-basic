import { MyLabel } from '../../components/MyLabel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: {control: 'select',options: ['normal','h1','h2','h3']},
    color: {control: 'select',options: ['primary','secondary','tertiary']},
    fontColor: {control: 'color'},
    backgroundColor: {control: 'color'},
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'MyLabel',
  size: 'normal',
  allCaps: false,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'MyLabel',
  size: 'h2',
  allCaps: false,
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'MyLabel',
  size: 'h3',
  allCaps: false,
  color: 'tertiary',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'MyLabel',
  allCaps: true,
};


// CUSTOM FONT COLOR
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'MyLabel',
  size: 'h1',
  allCaps: false,
  fontColor: '#ff0000',
};

export const CustomBackgroundColor = Template.bind({});
CustomFontColor.args = {
  label: 'MyLabel',
  size: 'h1',
  allCaps: false,
  fontColor: '#ff0000',
  backgroundColor: 'gray',
};