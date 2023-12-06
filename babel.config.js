/* eslint-disable no-template-curly-in-string */
module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          config: './config',
          components: './src/components',
          icons: './src/icons',
          sections: './src/sections',
          styles: './src/styles',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
}
