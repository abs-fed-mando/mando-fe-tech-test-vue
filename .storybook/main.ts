//@ts-nocheck
import type { StorybookConfig } from '@storybook/vue3-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {fileURLToPath, URL} from "node:url";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import vue from "@vitejs/plugin-vue";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal (config) {
    config.build!.target = 'esnext'
    config.resolve!.alias = {
      '@styles': fileURLToPath(new URL('../src/styles', import.meta.url)),
      '@components': fileURLToPath(new URL('../src/components', import.meta.url))
    }
    config.plugins!.push(vue())
    config.plugins!.push(tsconfigPaths({loose: true}))
    config.plugins!.push(
      createSvgIconsPlugin({
        iconDirs: [fileURLToPath(new URL('../src/assets/icons', import.meta.url))],
        symbolId: 'icon-[name]',
        inject: 'body-first'
      })
    )
    return config
  }
};
export default config;
