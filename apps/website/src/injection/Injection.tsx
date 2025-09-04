'use client'

import { ServicesContext, ResponsiveContext } from 'widgets/contexts'

import type { FC, PropsWithChildren } from 'react'
import { Image, Link } from './components'
import { FormsService, RouterService } from './services'
import router from 'next/router'

const Injection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ResponsiveContext.Provider initialState={undefined}>
      <ServicesContext.Provider
        initialState={{
          components: { Link, Image },
          services: {
            forms: new FormsService(),
            router: new RouterService(router),
          },
        }}
      >
        {children}
      </ServicesContext.Provider>
    </ResponsiveContext.Provider>
  )
}

export default Injection
