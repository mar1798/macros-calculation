function makeConfig<T extends Record<string, unknown>>(
  config: T
): <K extends keyof T>(key: K) => T[K] {
  return key => config[key]
}

export const publicConfig = makeConfig({
  baseUrl: process.env.NEXT_PUBLIC_WP_BASE_URL ?? 'invalid_env_value',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'invalid_env_value',
  revalidateDelay: 10,
  homePageSlug: 'home',
  newsletterFormEndpoint: '/newsletter-signup',
  reCaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  formEndpoint: '/form',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  gtmUAId: process.env.NEXT_PUBLIC_UA_ID,
} as const)

export const privateConfig = makeConfig({
  useProductionRobots: process.env.USE_PRODUCTION_ROBOTS?.toString() === 'true',
} as const)
