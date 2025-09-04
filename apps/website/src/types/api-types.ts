import { IHeaderProps, IHomeFormProps } from 'widgets/types'

export type RequestHandler<Payload, Response> = (payload: Payload) => Promise<Response>

export interface GetRequests {
  getHomeFormProps: RequestHandler<null, IHomeFormProps>
  getHeaderProps: RequestHandler<null, IHeaderProps>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractFirstParameter<T> = T extends (first: infer F) => any ? F : never

export type MapGetRequests = {
  [K in keyof GetRequests]: (
    payload: ExtractFirstParameter<GetRequests[K]>
  ) => ReturnType<GetRequests[K]>
}
