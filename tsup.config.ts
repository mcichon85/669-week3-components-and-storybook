import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: false,
  entry: ['src/index.ts'],
  external: ['react', 'react-native'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
