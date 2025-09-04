import React, { ReactNode } from 'react'
import { ILayoutProps } from 'widgets/types'
import { Layout } from 'widgets/organisms'

const MainTemplate: React.FC<ILayoutProps & { children: ReactNode }> = ({ header, children }) => {
  return <Layout header={header}>{children}</Layout>
}

export default MainTemplate
