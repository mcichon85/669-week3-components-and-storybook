import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from './Header';

const meta = {
  title: 'Components/Header', component: Header, parameters: { layout: 'fullscreen' }, tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
export const LoggedIn: Story = { args: { loggedIn: true, userName: 'Jordan' } };
export const CustomBrand: Story = { args: { siteName: 'Northstar' } };
export const LoggedInCustomBrand: Story = { args: { siteName: 'Northstar', loggedIn: true, userName: 'Sam' } };
