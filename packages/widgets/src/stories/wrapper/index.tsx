import type { IWrapperComponent } from '../../types'
import { ServicesContext, ResponsiveContext } from '../../contexts'
import { Link } from './components/Link'
import { Image } from './components/Image'
import { FormsService } from './services/FormsService'
import { RouterService } from './services/RouterService'

const services = {
  services: {
    forms: new FormsService(),
    router: new RouterService(),
  },
  components: {
    Link,
    Image,
  },
} as const

export const StoryWrapper: React.FC<IWrapperComponent> = ({ children }) => (
  <ResponsiveContext.Provider initialState={undefined}>
    <ServicesContext.Provider initialState={services}>{children}</ServicesContext.Provider>
  </ResponsiveContext.Provider>
)
