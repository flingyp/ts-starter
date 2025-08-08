import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['esm', 'cjs', 'iife'],
  entry: ['./index.ts'],
  outDir: './dist',
  shims: true,
  clean: true,
  dts: true,
});
