import type { JSX } from '@reatom/jsx'

import { Button, type ButtonAppearance, type ButtonProps } from './Button'

export type IconButtonProps = Omit<ButtonProps, 'appearance' | 'children'> & {
  appearance?: ButtonAppearance
  children: JSX.ElementChildren
}

export const IconButton = ({
  appearance = 'quiet',
  size = 'icon',
  children,
  ...props
}: IconButtonProps) => (
  <Button appearance={appearance} size={size} {...props}>
    {children}
  </Button>
)
