import { IPaginated, IPostCardProps, IServiceFetch, PaginationOpts } from '../../../types'

export class FetchService implements IServiceFetch {
  public async getPosts(
    args: PaginationOpts & { categories: Record<string, string[]> }
  ): Promise<IPaginated<IPostCardProps>> {
    alert(`Posts have been fetched using: ${JSON.stringify(args)}`)
    return Promise.resolve({
      pagination: { page: 1, totalPages: 1 },
      items: [],
    })
  }

  public async getIPAddress(): Promise<string> {
    return ''
  }
}
