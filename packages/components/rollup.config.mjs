import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const input = 'src/index.ts';

export default [
  {
    input,
    plugins: [
      {
        name: 'banner',
        renderChunk: (code) => `/* @prism/components */\n` + code,
      },
      vue(),
      resolve(),
      commonjs(),
    ],
    external: ['vue'],
    output: [
      { file: 'dist/index.js', format: 'es', sourcemap: true },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
  },
  {
    input,
    plugins: [dts()],
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
  },
];
