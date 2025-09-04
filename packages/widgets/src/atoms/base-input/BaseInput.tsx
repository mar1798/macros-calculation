import clsx from 'clsx'
import type { ChangeEvent, FC } from 'react'
import {
  IBasicStyling,
  IInputModel,
  IBaseTextInputProps,
  IBaseEmailInputProps,
  IBaseNumberInputProps,
} from '../../types'
import * as styles from './BaseInput.css'
import React from 'react'

type IBaseInputProps = IBaseTextInputProps | IBaseEmailInputProps | IBaseNumberInputProps

export const BaseInput: FC<IBaseInputProps & IBasicStyling & IInputModel<string>> = ({
  className,
  startIcon: StartIcon,
  endIcon: EndIcon,
  error,
  disabled,
  value,
  onChange,
  size,
  required,
  ...props
}) => {
  const classes = clsx(styles.container, className, {
    [styles.disabled]: disabled,
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.error]: error,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <label className={classes}>
      {StartIcon && <StartIcon className={clsx(styles.icon, { [styles.errorIcon]: error })} />}
      <input
        required={required}
        className={styles.input}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {EndIcon && <EndIcon className={styles.icon} />}
    </label>
  )
}
