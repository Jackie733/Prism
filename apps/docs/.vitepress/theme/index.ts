import DefaultTheme from 'vitepress/theme';
// Use package export for CSS tokens (no /src coupling)
import '@prism/tokens/themes.css';
export default {
  ...DefaultTheme,
};
