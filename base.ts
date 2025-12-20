import type { ViteUserConfig } from 'vitest/config';
import { defineConfig } from 'vitest/config';

/**
 * Base Vitest configuration shared across all environments.
 */
export const base = defineConfig({
  test: {
    globals: true,
    include: ['**/tests/**/*.spec.{ts,tsx}', '**/tests/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/*.d.ts', '**/node_modules/**', '**/dist/**'],
      reporter: ['text', 'json', 'html'],
    },
    passWithNoTests: true,
  },
});

/**
 * Merges custom config with base config.
 */
export const createConfig = (
  customConfig: ViteUserConfig = {}
): ViteUserConfig => {
  return defineConfig({
    ...base,
    ...customConfig,
    test: {
      ...base.test,
      ...customConfig.test,
    },
  });
};

export default base;
