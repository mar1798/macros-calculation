import clsx from 'clsx'
import React, { type ChangeEvent, type FC } from 'react'
import type { IBasicStyling, IInputModel, ITextareaProps } from '../../types'
import * as styles from './Textarea.css'

export const Textarea: FC<ITextareaProps & IBasicStyling & IInputModel<string>> = ({
  className,
  startIcon: StartIcon,
  error,
  disabled,
  value,
  onChange,
  required,
  placeholder,
  name,
}) => {
  const classes = clsx(styles.container, className, {
    [styles.disabled]: disabled,
    [styles.error]: error,
  })

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(event.target.value)
  }

  return (
    <label className={classes}>
      {StartIcon && <StartIcon className={clsx(styles.icon, { [styles.errorIcon]: error })} />}
      <textarea
        name={name}
        required={required}
        className={styles.textarea}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  )
}
