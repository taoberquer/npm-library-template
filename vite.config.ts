import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MaSuperLibrairie',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
    },
    rollupOptions: {
      external: ['node:*'],
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    }),
  ],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.config.ts',
        'dist/',
      ],
    },
  },
})