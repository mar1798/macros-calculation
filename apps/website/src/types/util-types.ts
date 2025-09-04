export type IDiscriminateUnion<T, K extends keyof T, V extends T[K]> =
  T extends Record<K, V> ? T : never

export type IMapMapper<T extends Record<K, string>, K extends keyof T, R> = {
  [V in T[K]]: (props: IDiscriminateUnion<T, K, V>) => R
}

export type IMapDiscriminatedComponent<T extends Record<K, string>, K extends keyof T> = {
  [V in T[K]]: ((props: IDiscriminateUnion<T, K, V>) => React.ReactElement | null) | null
}

export type IMapComponentItem<T extends Record<K, string>, K extends keyof T> = {
  [V in T[K]]: ((props: IDiscriminateUnion<T, K, V>) => React.ReactElement | null) | null
}
