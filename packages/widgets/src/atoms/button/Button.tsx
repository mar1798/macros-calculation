import clsx from 'clsx'
import type { IBasicStyling, IButtonUnion, IButtonComponentProps } from '../../types'
import React from 'react'
import { AppLink } from '../app-link'
import * as styles from './Button.css'

export const Button: React.FC<IButtonComponentProps & IBasicStyling & IButtonUnion> = ({
  className,
  startIcon: StartIcon,
  endIcon: EndIcon,
  children,
  ...props
}) => {
  const classes = clsx(styles.container, className, {
    [styles.small]: props.size === 'small',
    [styles.medium]: props.size === 'medium',
    [styles.large]: props.size === 'large',
    [styles.primary]: props.variant === 'primary',
    [styles.secondary]: props.variant === 'secondary',
    [styles.plain]: props.variant === 'plain',
    [styles.disabled]: props.disabled,
  })

  const content = (
    <>
      {StartIcon && <StartIcon className={styles.icon} />}
      <span className={styles.child}>{children}</span>
      {EndIcon && <EndIcon className={styles.icon} />}
    </>
  )

  if ('href' in props) {
    return (
      <AppLink {...props} className={classes}>
        {props.variant === 'primary' && <div className={clsx(styles.light)} />}
        {content}
      </AppLink>
    )
  }

  return (
    <button {...props} className={classes}>
      {props.variant === 'primary' && <div className={clsx(styles.light)} />}
      {content}
    </button>
  )
}
