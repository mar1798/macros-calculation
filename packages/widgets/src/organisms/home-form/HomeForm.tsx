import clsx from 'clsx'
import { type FC } from 'react'
import type { IBasicStyling, IHomeFormProps } from '../../types'
import * as styles from './HomeForm.css'
import * as commonStyles from '../../styling/commonStyles.css'
import { contentParse } from '../../utils'
import { MainForm } from '../../molecules'

export const HomeForm: FC<IHomeFormProps & IBasicStyling> = ({
  className,
  form,
  title,
  subtitle,
}) => {
  return (
    <section className={clsx(styles.container, className)}>
      <h2 className={clsx(commonStyles.title, styles.title)}>{contentParse(title)}</h2>
      <p className={clsx(commonStyles.descriptionHero, styles.subtitle)}>
        {contentParse(subtitle)}
      </p>
      <div className={styles.ctaContent}>
        <div className={styles.formWrapper}>
          {new Array(4).fill(null).map((_, i) => (
            <div
              key={i}
              className={clsx(
                clsx(styles.dot, {
                  [styles.dot1]: i === 0,
                  [styles.dot2]: i === 1,
                  [styles.dot3]: i === 2,
                  [styles.dot4]: i === 3,
                })
              )}
            />
          ))}
          <MainForm className={styles.form} {...form} />
        </div>
      </div>
    </section>
  )
}
