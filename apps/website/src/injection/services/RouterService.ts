import type { IRouterEvent, IRouterService } from 'widgets/types'
import { NextRouter } from 'next/router'

export class RouterService implements IRouterService {
  private readonly router: NextRouter

  public constructor(router: NextRouter) {
    this.router = router
  }

  public push(pathname: string, options?: Record<string, unknown>): void {
    this.router.push(pathname, options)
  }

  public back(): void {
    this.router.back()
  }

  public registerListener(
    eventName: 'routeChanged' | 'routeChangeBegin',
    fn: (e: IRouterEvent) => void
  ): () => void {
    const fnWrap = (): void => {
      fn({
        pathName: this.router.asPath,
        url: `${window.location.protocol}//${window.location.host}${this.router.asPath}`,
      })
    }

    const nextEventMap: Record<
      'routeChanged' | 'routeChangeBegin',
      'routeChangeComplete' | 'routeChangeStart'
    > = {
      routeChanged: 'routeChangeComplete',
      routeChangeBegin: 'routeChangeStart',
    }
    const nextEventName = nextEventMap[eventName]

    this.router.events.on(nextEventName, fnWrap)

    return () => {
      this.router.events.off(nextEventName, fnWrap)
    }
  }
}
