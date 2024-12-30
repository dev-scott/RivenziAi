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
  // ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends(),
  {
    ignores: [
      'node_modules', // Ignore dependencies
      'dist', // Ignore build output
      'build', // Ignore build output
      '*.min.js', // Ignore minified JS files
    ],
    rules: {
      // Désactive les règles suivantes
      // '@typescript-eslint/no-unused-vars': 'off', // Ignore les variables inutilisées
      // '@typescript-eslint/no-explicit-any': 'off', // Permet l'utilisation de `any`
      // '@typescript-eslint/no-empty-object-type': 'off', // Désactive l'interdiction du type vide "{}"
      // '@typescript-eslint/no-restricted-types': 'off', // Permet l'utilisation de types comme `Function`, `Object`, etc.
      '*': 'off',
    },
  },
];

export default eslintConfig;
