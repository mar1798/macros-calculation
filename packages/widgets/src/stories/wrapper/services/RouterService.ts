import type { IRouterService } from '../../../types'

export class RouterService implements IRouterService {
  public push = (pathname: string): void => {
    console.log(`Route changed to ${pathname}`)
  }

  public back = (): void => {
    console.log('I will be back')
  }

  public registerListener(): () => void {
    return () => {}
  }
}
