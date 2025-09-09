import type { ExtractPropTypes } from 'vue';

/**
 * Button component variant types
 */
export type ButtonVariant = 'solid' | 'outlined' | 'minimal';

/**
 * Button component intent color types
 */
export type ButtonIntent =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'none';

/**
 * Button component size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component native types
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset';

/**
 * Button component props type definition
 */
export interface ButtonProps {
  /**
   * Button variant
   * @default 'solid'
   */
  variant?: ButtonVariant;

  /**
   * Button intent color
   * @default 'primary'
   */
  intent?: ButtonIntent;

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Native button type
   * @default 'button'
   */
  type?: ButtonNativeType;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is a block element
   * @default false
   */
  block?: boolean;

  /**
   * Whether the button is icon-only
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Native name attribute
   */
  name?: string;

  /**
   * Native value attribute
   */
  value?: string | number;
}

/**
 * Button component events type definition
 */
export interface ButtonEmits {
  /**
   * Click event
   */
  (e: 'click', ev: MouseEvent): void;
}

/**
 * Button component default props
 */
export const buttonDefaultProps: Required<
  Pick<
    ButtonProps,
    | 'variant'
    | 'intent'
    | 'size'
    | 'type'
    | 'disabled'
    | 'loading'
    | 'block'
    | 'iconOnly'
  >
> = {
  variant: 'solid',
  intent: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  iconOnly: false,
};

/**
 * Button component props runtime definition
 */
export const buttonProps = {
  variant: {
    type: String as () => ButtonVariant,
    default: buttonDefaultProps.variant,
  },
  intent: {
    type: String as () => ButtonIntent,
    default: buttonDefaultProps.intent,
  },
  size: {
    type: String as () => ButtonSize,
    default: buttonDefaultProps.size,
  },
  type: {
    type: String as () => ButtonNativeType,
    default: buttonDefaultProps.type,
  },
  disabled: {
    type: Boolean,
    default: buttonDefaultProps.disabled,
  },
  loading: {
    type: Boolean,
    default: buttonDefaultProps.loading,
  },
  block: {
    type: Boolean,
    default: buttonDefaultProps.block,
  },
  iconOnly: {
    type: Boolean,
    default: buttonDefaultProps.iconOnly,
  },
  name: String,
  value: [String, Number],
} as const;

/**
 * Button component events runtime definition
 */
export const buttonEmits = {
  click: (ev: MouseEvent) => ev instanceof MouseEvent,
};

/**
 * Type extracted from runtime props
 */
export type ButtonPropsExtracted = ExtractPropTypes<typeof buttonProps>;
