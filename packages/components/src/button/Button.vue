<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'solid' | 'outlined' | 'minimal';
type Intent = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'none';
type Size = 'sm' | 'md' | 'lg';
type BtnType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    intent?: Intent;
    size?: Size;
    type?: BtnType;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    name?: string;
    value?: string | number;
  }>(),
  {
    variant: 'solid',
    intent: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    block: false,
  }
);

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>();

function onClick(e: MouseEvent) {
  if (props.disabled || props.loading) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  emit('click', e);
}

const isDisabled = computed(() => props.disabled || props.loading);
</script>

<template>
  <button
    class="pr-btn"
    :class="{ 'is-block': block }"
    :data-variant="variant"
    :data-intent="intent"
    :data-size="size"
    :type="type"
    :name="name"
    :value="value as any"
    :disabled="isDisabled"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="loading || undefined"
    @click="onClick"
  >
    <span
      v-if="$slots.prefix"
      class="pr-btn__icon pr-btn__icon--prefix"
      aria-hidden="true"
    >
      <slot name="prefix" />
    </span>

    <span v-if="loading" class="pr-spinner" aria-hidden="true" />

    <span class="pr-btn__label">
      <slot />
    </span>

    <span
      v-if="$slots.suffix"
      class="pr-btn__icon pr-btn__icon--suffix"
      aria-hidden="true"
    >
      <slot name="suffix" />
    </span>
  </button>
</template>

<style scoped>
.pr-btn {
  --pr-button-bg: var(--pr-primary);
  --pr-button-fg: var(--pr-on-primary);
  --pr-button-border: transparent;
  --pr-button-shadow-rest: var(--pr-shadow-1);
  --pr-button-shadow-hover: var(--pr-shadow-2);

  --pr-button-bg-hover: var(--pr-primary-hover);
  --pr-button-bg-active: var(--pr-primary-active);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--pr-space-2);

  height: var(--pr-ctl-h-md);
  padding: 0 var(--pr-space-3);
  border-radius: var(--pr-radius-md);
  border: 1px solid var(--pr-button-border);

  background: var(--pr-button-bg);
  color: var(--pr-button-fg);
  box-shadow: var(--pr-button-shadow-rest);

  font-size: var(--pr-fs-md);
  line-height: var(--pr-lh-tight);
  white-space: nowrap;
  user-select: none;

  transition: background-color var(--pr-anim-dur) var(--pr-anim-ease),
    color var(--pr-anim-dur) var(--pr-anim-ease),
    opacity var(--pr-anim-dur) var(--pr-anim-ease),
    box-shadow var(--pr-anim-dur) var(--pr-anim-ease);
}

.pr-btn.is-block {
  display: inline-flex;
  width: 100%;
}

@media (hover: hover) and (pointer: fine) {
  .pr-btn:hover {
    background: var(--pr-button-bg-hover);
  }
}
.pr-btn:active {
  background: var(--pr-button-bg-active);
}

.pr-btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.pr-btn[data-size='sm'] {
  height: var(--pr-ctl-h-sm);
  font-size: var(--pr-fs-sm);
}
.pr-btn[data-size='md'] {
  height: var(--pr-ctl-h-md);
  font-size: var(--pr-fs-md);
}
.pr-btn[data-size='lg'] {
  height: var(--pr-ctl-h-lg);
  font-size: var(--pr-fs-lg);
}

.pr-btn__icon {
  display: inline-flex;
  align-items: center;
}
.pr-btn__icon--prefix {
  margin-inline-start: 0;
}
.pr-btn__icon--suffix {
  margin-inline-end: 0;
}
.pr-btn__label {
  display: inline-block;
}

.pr-btn[data-variant='outlined'] {
  --pr-button-bg: transparent;
  --pr-button-fg: var(--pr-primary);
  --pr-button-border: var(--pr-primary);
  --pr-button-shadow-rest: none;
  --pr-button-shadow-hover: none;
}
@media (hover: hover) and (pointer: fine) {
  .pr-btn[data-variant='outlined']:hover {
    background: color-mix(in oklab, var(--pr-primary) 12%, transparent);
  }
}
.pr-btn[data-variant='outlined']:active {
  background: color-mix(in oklab, var(--pr-primary) 18%, transparent);
}

.pr-btn[data-variant='minimal'] {
  --pr-button-bg: transparent;
  --pr-button-fg: var(--pr-primary);
  --pr-button-border: transparent;
  --pr-button-shadow-rest: none;
  --pr-button-shadow-hover: none;
}
@media (hover: hover) and (pointer: fine) {
  .pr-btn[data-variant='minimal']:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  :root[data-theme='dark'] .pr-btn[data-variant='minimal']:hover {
    background: rgba(255, 255, 255, 0.06);
  }
}
.pr-btn[data-variant='minimal']:active {
  opacity: 0.96;
}

.pr-btn[data-intent='success'] {
  --pr-button-bg: var(--pr-success);
  --pr-button-fg: var(--pr-on-success);
  --pr-button-bg-hover: var(--pr-success-hover);
  --pr-button-bg-active: var(--pr-success-active);
}
.pr-btn[data-variant='outlined'][data-intent='success'] {
  --pr-button-fg: var(--pr-success);
  --pr-button-border: var(--pr-success);
}
.pr-btn[data-variant='minimal'][data-intent='success'] {
  --pr-button-fg: var(--pr-success);
}

.pr-btn[data-intent='warning'] {
  --pr-button-bg: var(--pr-warning);
  --pr-button-fg: var(--pr-on-warning);
  --pr-button-bg-hover: var(--pr-warning-hover);
  --pr-button-bg-active: var(--pr-warning-active);
}
.pr-btn[data-variant='outlined'][data-intent='warning'] {
  --pr-button-fg: var(--pr-warning);
  --pr-button-border: var(--pr-warning);
}
.pr-btn[data-variant='minimal'][data-intent='warning'] {
  --pr-button-fg: var(--pr-warning);
}

.pr-btn[data-intent='danger'] {
  --pr-button-bg: var(--pr-danger);
  --pr-button-fg: var(--pr-on-danger);
  --pr-button-bg-hover: var(--pr-danger-hover);
  --pr-button-bg-active: var(--pr-danger-active);
}
.pr-btn[data-variant='outlined'][data-intent='danger'] {
  --pr-button-fg: var(--pr-danger);
  --pr-button-border: var(--pr-danger);
}
.pr-btn[data-variant='minimal'][data-intent='danger'] {
  --pr-button-fg: var(--pr-danger);
}

.pr-btn[data-intent='info'] {
  --pr-button-bg: var(--pr-info);
  --pr-button-fg: var(--pr-on-info);
  --pr-button-bg-hover: var(--pr-info-hover);
  --pr-button-bg-active: var(--pr-info-active);
}
.pr-btn[data-variant='outlined'][data-intent='info'] {
  --pr-button-fg: var(--pr-info);
  --pr-button-border: var(--pr-info);
}
.pr-btn[data-variant='minimal'][data-intent='info'] {
  --pr-button-fg: var(--pr-info);
}

.pr-btn[data-intent='none'] {
  --pr-button-bg: var(--pr-neutral);
  --pr-button-fg: var(--pr-on-neutral);
  --pr-button-border: var(--pr-neutral-border);
  --pr-button-shadow-rest: none;
  --pr-button-shadow-hover: none;
  --pr-button-bg-hover: var(--pr-neutral-hover);
  --pr-button-bg-active: var(--pr-neutral-active);
}
.pr-btn[data-variant='outlined'][data-intent='none'] {
  --pr-button-bg: transparent;
  --pr-button-fg: var(--pr-on-neutral);
  --pr-button-border: var(--pr-neutral-border);
}
.pr-btn[data-variant='minimal'][data-intent='none'] {
  --pr-button-bg: transparent;
  --pr-button-fg: var(--pr-on-neutral);
}

.pr-spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 999px;
  display: inline-block;
  animation: pr-spin var(--pr-dur-600) linear infinite;
  margin-inline-end: var(--pr-space-2);
}
@keyframes pr-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
