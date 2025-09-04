import { type FC, ReactNode } from 'react'
import type { IBasicStyling, ILayoutProps } from '../../types'
import { Header } from '../header'

export const Layout: FC<ILayoutProps & IBasicStyling & { children: ReactNode }> = ({
  children,
  header,
}) => {
  return (
    <>
      <Header {...header} />
      {children}
    </>
  )
}
