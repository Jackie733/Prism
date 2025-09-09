import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'node:url';

const useSource =
  process.env.PRISM_USE_SOURCE === '1' ||
  process.env.PRISM_USE_SOURCE === 'true' ||
  process.env.NODE_ENV === 'development';

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
        { text: '自定义主题', link: '/design/theme' },
        { text: 'Density 密度', link: '/design/density' },
        { text: 'Motion 动效', link: '/design/motion' },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://example.com/your-repo' }],
  },
  vite: {
    resolve: {
      alias: [
        ...(
          useSource
            ? [
                {
                  find: '@jackie733/prism/themes.css',
                  replacement: fileURLToPath(
                    new URL(
                      '../../../packages/tokens/src/themes.css',
                      import.meta.url
                    )
                  ),
                },
                {
                  find: '@jackie733/prism/style.css',
                  replacement: fileURLToPath(
                    new URL(
                      '../../../packages/components/src/style.css',
                      import.meta.url
                    )
                  ),
                },
                {
                  find: '@jackie733/prism',
                  replacement: fileURLToPath(
                    new URL(
                      '../../../packages/components/src/index.ts',
                      import.meta.url
                    )
                  ),
                },
              ]
            : []
        ),
      ],
    },
    css: {
      preprocessorOptions: {},
    },
  },
});
