import type { Meta, StoryObj } from '@storybook/react-vite';

import { List } from './List';

const items = [
  { id: '1', title: 'Design system', description: 'Updated 10 minutes ago' },
  { id: '2', title: 'Research notes', description: 'Updated yesterday' },
  { id: '3', title: 'Project brief' },
];

const meta = {
  title: 'Components/List', component: List, parameters: { layout: 'centered' }, tags: ['autodocs'], args: { items },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {};
export const Bordered: Story = { args: { variant: 'bordered' } };
export const Compact: Story = { args: { variant: 'compact' } };
export const Empty: Story = { args: { items: [], emptyMessage: 'There are no projects to display.' } };
