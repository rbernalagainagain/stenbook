module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: ['@storybook/addon-knobs'],

  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //   })
  //   config.resolve.extensions.push('.ts', '.tsx')
  //   return config
  // },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve('awesome-typescript-loader'),
  //       },
  //     ],
  //   })
  //   config.resolve.extensions.push('.ts', '.tsx')
  //   return config
  // },
}
