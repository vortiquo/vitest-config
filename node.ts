import { defineConfig, mergeConfig } from 'vitest/config';

import { base } from './base';

/**
 * Vitest configuration for Node.js projects.
 */
export const node = mergeConfig(
  base,
  defineConfig({
    test: {
      environment: 'node',
    },
  })
);

export default node;
