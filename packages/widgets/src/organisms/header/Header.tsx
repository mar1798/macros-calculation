import { type FC } from 'react'
import type { IBasicStyling, IHeaderProps } from '../../types'
import { Navbar } from '../../molecules'

// TODO: add mobile variant

export const Header: FC<IHeaderProps & IBasicStyling> = props => {
  return <Navbar {...props} />
}
