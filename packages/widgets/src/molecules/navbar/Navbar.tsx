import clsx from 'clsx'
import { type FC } from 'react'
import type { IBasicStyling, IHeaderProps } from '../../types'
import * as styles from './Navbar.css'
import { AppLink } from '../../atoms'

export const Navbar: FC<IHeaderProps & IBasicStyling> = ({ className, navLinks }) => {
  return (
    <header className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          {navLinks.map((item, i) => (
            <AppLink className={styles.link} {...item.link} key={i}>
              {item.label}
            </AppLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
