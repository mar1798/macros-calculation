import { CalInstance } from 'widgets/types'

export declare global {
  interface Window {
    dataLayer?: GTMProps
    Cal?: CalInstance
  }
}
