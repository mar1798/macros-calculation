import { IFormSubmitFeed } from 'widgets/types'
import { ExtractFirstParameter, GetRequests, MapGetRequests } from '@/types/api-types'
import { feedHeader, feedHomeForm } from 'widgets/feed'

export interface RequestOpts {
  baseUrl: string
}

export class Api {
  private opts: RequestOpts

  constructor(opts: RequestOpts) {
    this.opts = opts
  }

  private buildUrl(
    endpoint: string,
    queryParams?: Record<string, string | number | string[]>
  ): string {
    let url = this.opts.baseUrl + endpoint
    if (queryParams) {
      const params = new URLSearchParams()
      Object.entries(queryParams).forEach(([key, value]) =>
        params.append(key, Array.isArray(value) ? value.join(',') : value.toString())
      )

      url += `?${params.toString()}`
    }
    return url
  }

  getRequest<K extends keyof GetRequests>(
    key: K,
    payload: ExtractFirstParameter<GetRequests[K]>
  ): ReturnType<GetRequests[K]> {
    const map: MapGetRequests = {
      getHomeFormProps: () => Promise.resolve(feedHomeForm()),
      getHeaderProps: () => Promise.resolve(feedHeader()),
    }
    return map[key](payload)
  }

  private async request<T extends object>(
    endpoint: string,
    queryParams?: Record<string, string | number | string[]>
  ): Promise<T> {
    const url = this.buildUrl(endpoint, queryParams)
    try {
      const response = await fetch(url)
      const text = await response.text()

      return JSON.parse(text) as T
    } catch (e) {
      console.warn('Wp response json body parse error. Endpoint: ', url)
      throw e
    }
  }

  async sendForm({
    data,
    name: form_name,
    action,
  }: IFormSubmitFeed & { action: string }): Promise<boolean> {
    try {
      const feed = {
        form_name,
        fields: Object.keys(data).map(key => ({
          name: key,
          value: data[key],
        })),
      }

      const result = (await this.postRequest(action, feed)) as { code?: number }
      if ('code' in result && result.code === 200) {
        return true
      }
    } catch {
      return false
    }

    return false
  }

  async postRequest(
    endpoint: string,
    body: Record<string, string | null | Record<string, string> | { name: string; value: string }[]>
  ): Promise<{ message: string; code: number }> {
    const response = await fetch(encodeURI(endpoint), {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(body),
    })
    return response.json()
  }
}
