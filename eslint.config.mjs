import vortiquoConfig from '@vortiquo/eslint-config/node-library';

export default [
  {
    ignores: [
      '*.config.mjs',
      '*.config.js',
      '.lintstagedrc.mjs',
      '.releaserc.js',
    ],
  },
  ...vortiquoConfig,
];
