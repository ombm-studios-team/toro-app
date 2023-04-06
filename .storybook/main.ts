import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: 'webpack5',
    disableTelemetry: true, // 👈 Disables telemetry
    enableCrashReports: false,
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
