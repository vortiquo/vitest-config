# @vortiquo/vitest-config

[![npm version](https://img.shields.io/npm/v/@vortiquo/vitest-config.svg)](https://www.npmjs.com/package/@vortiquo/vitest-config)
[![license](https://img.shields.io/npm/l/@vortiquo/vitest-config.svg)](https://github.com/vortiquo/vitest-config/blob/main/LICENSE)

Shared Vitest configurations for React, Next.js, and Node.js projects.

## Why Vitest?

- ⚡ **10-20x faster** than Jest
- 🎯 **Native TypeScript** - No extra transforms
- 📦 **Native ESM** - Works out of the box
- 🔄 **Jest-compatible API** - Easy migration
- 🔥 **Instant watch mode** - Powered by Vite

## Installation

```bash
npm install -D @vortiquo/vitest-config vitest@^4
# or
pnpm add -D @vortiquo/vitest-config vitest@^4
# or
yarn add -D @vortiquo/vitest-config vitest@^4
```

> **Note:** Requires `vitest@^4.0.0` and `typescript@^5.0.0` as peer
> dependencies.

## Available Configs

| Config   | Use Case                 |
| -------- | ------------------------ |
| `node`   | Node.js backend projects |
| `react`  | React applications       |
| `nextjs` | Next.js applications     |

## Usage

Create a `vitest.config.ts` in your project:

### Node.js

```ts
import { node } from '@vortiquo/vitest-config/node';

export default node;
```

### React

```ts
import { react } from '@vortiquo/vitest-config/react';

export default react;
```

With setup files:

```ts
import { createReactConfig } from '@vortiquo/vitest-config/react';

export default createReactConfig(['./src/test/setup.ts']);
```

### Next.js

```ts
import { nextjs } from '@vortiquo/vitest-config/nextjs';

export default nextjs;
```

With custom options:

```ts
import { createNextJsConfig } from '@vortiquo/vitest-config/nextjs';

export default createNextJsConfig({
  setupFiles: ['./vitest.setup.ts'],
  alias: {
    '@components/': './src/components/',
  },
});
```

## Additional Dependencies

For React/Next.js testing:

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom jsdom
```

## Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Setup File

Create a setup file for React/Next.js projects:

```ts
// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
```

## What's Included

- ✅ Global test APIs (`describe`, `it`, `expect`)
- ✅ V8 coverage provider
- ✅ Standard test patterns (`*.spec.ts`, `*.test.ts`)
- ✅ React plugin for JSX transforms
- ✅ Path alias support for Next.js

## Migration from Jest

Most tests work without changes:

```ts
// Same API!
describe('MyComponent', () => {
  it('renders', () => {
    expect(true).toBe(true);
  });
});
```

Key differences:

- `jest.fn()` → `vi.fn()`
- `jest.mock()` → `vi.mock()`

## License

MIT © [Vortiquo](https://vortiquo.com)
