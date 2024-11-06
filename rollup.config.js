import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/main.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    postcss(), // Додайте цей плагін для підтримки імпорту CSS
  ],
});

