import React from 'react';
import { Meta } from '@storybook/react';

import Button from './index';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    appearance: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger']
    },
    onClick: {
      action: 'onClick',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => <Button {...args} />;
Template.args = { appearance: 'primary', block: false, children: 'Text' };

export const Primary = Template.bind({});
Primary.args = { ...Template.args, appearance: 'primary', children: 'Submit' };

export const Secondary = Template.bind({});
Secondary.args = { ...Template.args, appearance: 'secondary', children: 'Cancel' };

export const Danger = Template.bind({});
Danger.args = { ...Template.args, appearance: 'danger', children: 'Delete' };

export const Block = (args) => (
  <>
    <Button appearance="primary" style={{ marginBottom: 15 }} block {...args}>
      Submit
    </Button>
    <Button appearance="secondary" style={{ marginBottom: 15 }} block {...args}>
      Cancel
    </Button>
    <Button appearance="danger" style={{ marginBottom: 15 }} block {...args}>
      Delete
    </Button>
  </>
);
Block.argTypes = {
  appearance: {
    table: {
      disable: true
    }
  }
};

export const Anchor = (args) => (
  <>
    <Button appearance="primary" style={{ marginRight: 15 }} href="#link" {...args}>
      Anchor
    </Button>
    <Button appearance="secondary" style={{ marginRight: 15 }} href="#link" {...args}>
      Anchor
    </Button>
    <Button appearance="danger" href="#link" {...args}>
      Anchor
    </Button>
  </>
);
Anchor.argTypes = Block.argTypes;

export const Tabindex = (args) => (
  <>
    <Button style={{ marginRight: 15 }} tabIndex={0} {...args}>
      One
    </Button>
    <Button style={{ marginRight: 15 }} tabIndex={0} {...args}>
      Two
    </Button>
    <Button style={{ marginRight: 15 }} tabIndex={0} {...args}>
      Three
    </Button>
    <Button style={{ marginRight: 15 }} tabIndex={-1} {...args}>
      Five
    </Button>
    <Button tabIndex={0} {...args}>
      Four
    </Button>
  </>
);
Tabindex.argTypes = Block.argTypes;
