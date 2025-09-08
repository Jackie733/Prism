# Motion & Animation

- 默认使用 **ease-out**（`--ease-out-cubic`），时长 **200–300ms**。
- 任意动画 **不超过 1s**（除非纯演示性）。
- 优先使用 **opacity/transform**，避免 top/left。
- 仅对可悬停设备开启 hover 过渡。
- 尊重 `prefers-reduced-motion`：自动降级至近 0 时长，移除动画。

## Tokens

- Durations: `--dur-100/150/200/250/300/400/600`
- Easing: `--ease-out-*`, `--ease-in-out-*`, `--ease`, `linear`
- Defaults: `--anim-dur`, `--anim-ease`
