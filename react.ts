import react from '@vitejs/plugin-react';
import type { ViteUserConfig } from 'vitest/config';
import { defineConfig, mergeConfig } from 'vitest/config';

import { base } from './base';

/**
 * Vitest configuration for React projects.
 */
export const reactConfig = mergeConfig(
  base,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: [],
      css: true,
    },
  })
);

/**
 * Creates a React Vitest config with custom options.
 */
export const createReactConfig = (
  setupFiles: string[] = []
): ViteUserConfig => {
  return mergeConfig(
    base,
    defineConfig({
      plugins: [react()],
      test: {
        environment: 'jsdom',
        setupFiles,
        css: true,
      },
    })
  );
};

export { reactConfig as react };
export default reactConfig;
