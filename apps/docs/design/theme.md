# 自定义主题

Prism 组件通过 CSS 变量驱动样式。你只需在引入 `@jackie733/prism/themes.css` 后覆盖相应变量，即可自定义主题颜色与风格，无需改动组件代码。

## 快速开始

在应用入口（如 `main.ts`）引入主题令牌：

```ts
import '@jackie733/prism/themes.css'
```

全局覆写主题变量（推荐仅覆写语义变量）：

```css
:root {
  --pr-primary: #7c3aed;      /* 品牌主色 */
  --pr-on-primary: #ffffff;   /* 主色上的前景色 */
}
```

## 局部主题（按区域/页面）

给任意容器设置变量，只影响子树：

```html
<section class="brand-a">
  <Button>Brand A</Button>
</section>

<style>
.brand-a { --pr-primary: #16a34a; }
</style>
```

## 暗黑模式

内置暗黑覆盖，切换方式：

```html
<html data-theme="dark">...</html>
```

或在运行时：

```ts
document.documentElement.setAttribute('data-theme', 'dark')
```

## 运行时动态主题

直接修改变量即可即时生效：

```ts
const root = document.documentElement
root.style.setProperty('--pr-primary', '#2563eb')
root.style.setProperty('--pr-on-primary', '#fff')
```

## 与 Tailwind 搭配

可以使用任意属性语法将 Tailwind 颜色注入变量：

```vue
<Button
  class="[--pr-primary:theme(colors.indigo.600)] [--pr-on-primary:#fff]"
>
  Indigo
</Button>
```

或在容器上定义品牌色：

```html
<section class="[--pr-primary:theme(colors.sky.500)]">
  <Button>Sky</Button>
</section>
```

## 建议优先覆写的变量

- 主色：`--pr-primary`，与对比色 `--pr-on-primary`
- 意图色：`--pr-success`/`--pr-on-success`、`--pr-warning`/`--pr-on-warning`、`--pr-danger`/`--pr-on-danger`、`--pr-info`/`--pr-on-info`
- 中性色：`--pr-neutral`、`--pr-on-neutral`、`--pr-neutral-border`

Hover/Active 颜色已基于主色用 `color-mix` 自动推导（如 `--pr-primary-hover/active`），通常无需手动覆写。

## 加载顺序与优先级

- `@jackie733/prism/themes.css` 在 `@layer tokens` 层；你自己的样式若不使用层，天然优先级更高。
- 若使用 Tailwind 的层（`@layer utilities`），把变量定义在具体容器元素上即可避免层级竞争。
- 不建议直接覆盖 `.pr-btn` 等内部选择器，优先通过变量定制，稳定且向后兼容。

