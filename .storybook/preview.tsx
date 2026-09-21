import type { Preview } from '@storybook/react-vite';
import { View } from 'react-native';
import { colors, spacing } from '../src/tokens';

const preview: Preview = {
  decorators: [(Story) => <View style={{ backgroundColor: colors.canvas, minHeight: 180, padding: spacing.xl }}><Story /></View>],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'canvas', values: [{ name: 'canvas', value: colors.canvas }, { name: 'surface', value: colors.surface }] },
    viewport: { viewports: { phone: { name: 'Phone', styles: { width: '390px', height: '844px' } }, tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } } }, defaultViewport: 'phone' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
