import react from '@vitejs/plugin-react';
import type { ViteUserConfig } from 'vitest/config';
import { defineConfig, mergeConfig } from 'vitest/config';

import { base } from './base';

/**
 * Vitest configuration for Next.js projects.
 *
 * Note: For Next.js, you might also consider using @vitejs/plugin-react-swc
 * for faster builds, matching Next.js's SWC compiler.
 */
export const nextjs = mergeConfig(
  base,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: [],
      css: true,
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
      },
    },
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
      },
    },
  })
);

/**
 * Creates a Next.js Vitest config with custom options.
 */
export const createNextJsConfig = (
  options: {
    setupFiles?: string[];
    alias?: Record<string, string>;
  } = {}
): ViteUserConfig => {
  const { setupFiles = [], alias = {} } = options;

  return mergeConfig(
    base,
    defineConfig({
      plugins: [react()],
      test: {
        environment: 'jsdom',
        setupFiles,
        css: true,
        alias: {
          '@/': new URL('./src/', import.meta.url).pathname,
          ...alias,
        },
      },
      resolve: {
        alias: {
          '@/': new URL('./src/', import.meta.url).pathname,
          ...alias,
        },
      },
    })
  );
};

export default nextjs;
