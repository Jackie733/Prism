import DefaultTheme from 'vitepress/theme';
import { onMounted, watch } from 'vue';
import { useData } from 'vitepress';
// Base tokens and built CSS (in source mode, style.css resolves to a local placeholder)
import '@jackie733/prism/themes.css';
import '@jackie733/prism/style.css';

export default {
  ...DefaultTheme,
  setup() {
    const { isDark } = useData();

    // 同步VitePress的暗色模式状态到根元素
    const syncTheme = () => {
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        if (isDark.value) {
          root.setAttribute('data-theme', 'dark');
          root.classList.add('dark');
        } else {
          root.removeAttribute('data-theme');
          root.classList.remove('dark');
        }
      }
    };

    onMounted(() => {
      syncTheme();
      watch(isDark, syncTheme, { immediate: true });
    });
  },
};
