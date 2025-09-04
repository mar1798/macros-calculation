'use client'

import {
  ServicesContext,
  ResponsiveContext,
  PopupContext,
  NotificationsContext,
  AnchorSectionContext,
} from 'widgets/contexts'

import type { FC, PropsWithChildren } from 'react'
import { Image, Link } from './components'
import { FetchService, FormsService, RouterService } from './services'
import { NotificationLayer, PopupWrapper } from 'widgets/molecules'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { publicConfig } from '@/сonfig'
import router from 'next/router'

const Injection: FC<PropsWithChildren> = ({ children }) => {
  const reCaptchaSiteKey = publicConfig('reCaptchaSiteKey') ?? ''
  return (
    <ResponsiveContext.Provider initialState={undefined}>
      <GoogleReCaptchaProvider
        reCaptchaKey={reCaptchaSiteKey}
        scriptProps={{
          defer: true,
        }}
      >
        <AnchorSectionContext.Provider initialState={undefined}>
          <NotificationsContext.Provider initialState={{ queue: [] }}>
            <ServicesContext.Provider
              initialState={{
                components: { Link, Image },
                services: {
                  forms: new FormsService(),
                  router: new RouterService(router),
                  request: new FetchService(),
                },
              }}
            >
              <PopupContext.Provider initialState={null}>
                {children}
                <PopupWrapper />
                <NotificationLayer />
              </PopupContext.Provider>
            </ServicesContext.Provider>
          </NotificationsContext.Provider>
        </AnchorSectionContext.Provider>
      </GoogleReCaptchaProvider>
    </ResponsiveContext.Provider>
  )
}

export default Injection
