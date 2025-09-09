// Single source of truth: reference CSS variables from themes.css
// Consumers can read these in JS while styles use the same CSS vars.
export const tokens = {
  radius: {
    sm: 'var(--pr-radius-sm)',
    md: 'var(--pr-radius-md)',
    lg: 'var(--pr-radius-lg)',
  },
  space: {
    1: 'var(--pr-space-1)',
    2: 'var(--pr-space-2)',
    3: 'var(--pr-space-3)',
    4: 'var(--pr-space-4)',
    5: 'var(--pr-space-5)',
    6: 'var(--pr-space-6)',
    7: 'var(--pr-space-7)',
  },
  controlHeight: {
    sm: 'var(--pr-ctl-h-sm)',
    md: 'var(--pr-ctl-h-md)',
    lg: 'var(--pr-ctl-h-lg)',
  },
  fontSize: {
    xs: 'var(--pr-fs-xs)',
    sm: 'var(--pr-fs-sm)',
    md: 'var(--pr-fs-md)',
    lg: 'var(--pr-fs-lg)',
    xl: 'var(--pr-fs-xl)',
    xxl: 'var(--pr-fs-2xl)',
    xxxl: 'var(--pr-fs-3xl)',
  },
  fontWeight: {
    regular: 'var(--pr-fw-regular)',
    medium: 'var(--pr-fw-medium)',
    semibold: 'var(--pr-fw-semibold)',
    bold: 'var(--pr-fw-bold)',
  },
  motion: {
    duration: 'var(--pr-anim-dur)',
    easing: 'var(--pr-anim-ease)',
    fast: 'var(--pr-anim-dur-fast)',
    slow: 'var(--pr-anim-dur-slow)',
  },
  border: {
    weak: 'var(--pr-border-weak)',
    strong: 'var(--pr-border-strong)',
    w1: 'var(--pr-border-w-1)',
    w2: 'var(--pr-border-w-2)',
  },
  surface: {
    0: 'var(--pr-surface-0)',
    1: 'var(--pr-surface-1)',
    2: 'var(--pr-surface-2)',
    3: 'var(--pr-surface-3)',
  },
  overlay: {
    weak: 'var(--pr-overlay-weak)',
    strong: 'var(--pr-overlay-strong)',
    tintWeak: 'var(--pr-tint-alpha-weak)',
    tintStrong: 'var(--pr-tint-alpha-strong)',
  },
  state: {
    disabledOpacity: 'var(--pr-disabled-opacity)',
    disabledCursor: 'var(--pr-disabled-cursor)',
  },
};
