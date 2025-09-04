import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../src/**/story*.stories.tsx'],
  typescript: {
    check: false,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
  ],
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
          include: '**/*.assets',
        }),
        vanillaExtractPlugin(),
      ],
    })
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
module.exports = config
