import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  title: 'Prism UI',
  description: 'Vue component library template',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'Design', link: '/design/density' },
    ],
    sidebar: {
      '/components/': [
        { text: 'Getting Started', link: '/components/index' },
        { text: 'Button 按钮', link: '/components/button' },
      ],
      '/design/': [
        { text: 'Density 密度', link: '/design/density' },
        { text: 'Motion 动效', link: '/design/motion' },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://example.com/your-repo' }],
  },
  vite: {
    resolve: {
      alias: [
        // Map CSS export to tokens source first (more specific match)
        {
          find: '@jackie733/prism/themes.css',
          replacement: fileURLToPath(
            new URL('../../../packages/tokens/src/themes.css', import.meta.url)
          ),
        },
        // Map package entry to components source for local dev
        {
          find: '@jackie733/prism',
          replacement: fileURLToPath(
            new URL('../../../packages/components/src/index.ts', import.meta.url)
          ),
        },
        // Keep legacy internal alias if referenced somewhere
        {
          find: '@prism/components',
          replacement: fileURLToPath(
            new URL('../../../packages/components/src/index.ts', import.meta.url)
          ),
        },
      ],
    },
    css: {
      preprocessorOptions: {},
    },
  },
});
