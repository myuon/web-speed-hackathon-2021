module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'auto',
        useBuiltIns: 'entry',
      },
    ],
    ['@babel/preset-react'],
  ],
};
