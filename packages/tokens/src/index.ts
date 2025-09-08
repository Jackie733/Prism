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
  },
  motion: {
    duration: 'var(--pr-anim-dur)',
    easing: 'var(--pr-anim-ease)',
  },
};
