module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { chrome: '58' } }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
};
