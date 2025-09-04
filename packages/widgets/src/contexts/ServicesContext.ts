import {
  IBasicStyling,
  IImageComponentProps,
  ILink,
  IRouterService,
  IServiceForms,
  IWrapperComponent,
} from '../types'
import { unmanagedContainer } from '../utils/unstated'

/**
 * Service container contexts. Use this contexts to get access to
 * the services and components injected by the application.
 */
export interface ServiceContainerContextProps {
  services: {
    forms: IServiceForms
    router: IRouterService
  }
  components: {
    Link: React.FC<IWrapperComponent & ILink & IBasicStyling>
    Image: React.FC<IBasicStyling & IImageComponentProps>
  }
}

export const ServicesContext = unmanagedContainer<ServiceContainerContextProps>()
