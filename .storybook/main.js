module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('babel-plugin-emotion')],
          },
        },
        {

          loader: require.resolve('ts-loader'),
          options: {
            configFile: 'tsconfig.stories.json'
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  };

