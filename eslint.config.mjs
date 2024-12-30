import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the FlatCompat instance for extending older configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(),
  {
    ignores: [
      'node_modules', // Ignore dependencies
      'dist', // Ignore build output
      'build', // Ignore build output
      '*.min.js', // Ignore minified JS files
    ],
    rules: {
      // Disable all ESLint rules globally
      '*': 'off',
    },
  },
];

export default eslintConfig;
