import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Components/Input', component: Input, parameters: { layout: 'centered' }, tags: ['autodocs'],
  args: { label: 'Email address', placeholder: 'you@example.com' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: 'We will never share your email.' } };
export const Error: Story = { args: { defaultValue: 'not-an-email', error: 'Enter a valid email address.' } };
export const Disabled: Story = { args: { defaultValue: 'you@example.com', disabled: true } };
