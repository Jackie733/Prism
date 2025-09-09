import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js',
        },
        {
          format: 'cjs',
          entryFileNames: 'index.cjs',
          exports: 'named',
        },
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
