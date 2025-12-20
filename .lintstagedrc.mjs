export default {
  '**/*.{js,jsx,ts,tsx,.mjs,.cjs,hbs,html,mjml,css,scss,json,graphql,yml,yaml,md}':
    ['prettier --write'],
  '**/*.{js,jsx,ts,tsx,.mjs,.cjs}': [
    'pnpm eslint --max-warnings=0 --fix --no-warn-ignored',
  ],
};
