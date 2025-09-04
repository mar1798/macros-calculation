import clsx from 'clsx'
import { type FC } from 'react'
import type { IBasicStyling, IControlProps } from '../../types'
import * as styles from './Control.css'
import { ReactComponent as InfoCircle } from '../../assets/info-circle.svg'
import { contentParse } from '../../utils'

export const Control: FC<IControlProps & IBasicStyling> = ({
  className,
  helperTextClassName,
  children,
  helperText,
  label,
  error,
  required,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <span className={styles.label}>
          {contentParse(label)}
          <span className={styles.asterix}>{required && '*'}</span>
        </span>
      )}
      {children}
      {helperText && (
        <div className={clsx(styles.helperText, helperTextClassName)}>
          {<InfoCircle className={clsx(styles.infoIcon, { [styles.error]: error })} />}
          <span>{helperText}</span>
        </div>
      )}
    </div>
  )
}
