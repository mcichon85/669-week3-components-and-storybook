import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  framework: "@storybook/react-vite",
  docs: { autodocs: 'tag' },
  viteFinal: async (config) => {
    const base = process.env.STORYBOOK_BASE_PATH ?? '/';
    return {
      ...config,
      base: base.endsWith('/') ? base : `${base}/`,
      resolve: { ...config.resolve, alias: { ...config.resolve?.alias, 'react-native': 'react-native-web' } },
      define: { ...config.define, global: 'globalThis' },
    };
  },
};
export default config;
