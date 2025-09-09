import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from 'typescript';

function tsTranspile() {
  return {
    name: 'ts-transpile',
    transform(code, id) {
      // Transpile TS from .ts files and Vue SFC virtual TS modules
      if (/\.(tsx?)$/.test(id) || /\.vue(\?.*lang=ts.*)$/.test(id)) {
        const result = ts.transpileModule(code, {
          fileName: id,
          compilerOptions: {
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
            sourceMap: true,
          },
        });
        return { code: result.outputText, map: result.sourceMapText ?? null };
      }
    },
  };
}

function inlineVueCss() {
  const cssRE = /\.vue\?vue&type=style/;
  return {
    name: 'inline-vue-css',
    transform(code, id) {
      if (!cssRE.test(id)) return null;
      const js = `// injected by inline-vue-css\nexport default (function(){\n  if (typeof document === 'undefined') return null;\n  var s = document.createElement('style');\n  s.setAttribute('data-vue-sfc', '');\n  s.textContent = ${JSON.stringify(
        code
      )};\n  document.head.appendChild(s);\n  return s;\n})();`;
      return { code: js, map: { mappings: '' } };
    },
  };
}

const input = 'src/index.ts';

export default [
  {
    input,
    plugins: [
      {
        name: 'header-and-style-import',
        renderChunk(code, chunk, outputOptions) {
          const header = '/* @jackie733/prism */\n';
          if (outputOptions.format === 'es') {
            return header + "import './themes.css';\n" + code;
          }
          return header + code;
        },
      },
      vue(),
      inlineVueCss(),
      tsTranspile(),
      resolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.vue'] }),
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
];
