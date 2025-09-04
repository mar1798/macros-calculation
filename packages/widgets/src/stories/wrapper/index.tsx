import type { IWrapperComponent } from '../../types'
import {
  ServicesContext,
  ResponsiveContext,
  PopupContext,
  NotificationsContext,
  AnchorSectionContext,
} from '../../contexts'
import { Link } from './components/Link'
import { Image } from './components/Image'
import { FormsService } from './services/FormsService'
import { RouterService } from './services/RouterService'
import { NotificationLayer, PopupWrapper } from '../../molecules'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { FetchService } from './services/FetchService'

const services = {
  services: {
    forms: new FormsService(),
    router: new RouterService(),
    request: new FetchService(),
  },
  components: {
    Link,
    Image,
  },
} as const

export const StoryWrapper: React.FC<IWrapperComponent> = ({ children }) => (
  <ResponsiveContext.Provider initialState={undefined}>
    <GoogleReCaptchaProvider reCaptchaKey={'placeholder'}>
      <AnchorSectionContext.Provider initialState={undefined}>
        <NotificationsContext.Provider initialState={{ queue: [] }}>
          <ServicesContext.Provider initialState={services}>
            <PopupContext.Provider initialState={null}>
              {children}
              <PopupWrapper />
            </PopupContext.Provider>
            <NotificationLayer />
          </ServicesContext.Provider>
        </NotificationsContext.Provider>
      </AnchorSectionContext.Provider>
    </GoogleReCaptchaProvider>
  </ResponsiveContext.Provider>
)
