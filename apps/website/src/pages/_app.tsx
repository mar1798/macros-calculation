import 'widgets/styling/preflight.css'
import 'widgets/styling/global.css'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import * as styles from '../styles.css'
import React from 'react'
import Injection from '@/injection/Injection'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const eloqua = localFont({
  variable: '--font-eloqua',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/EloquiaDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EloquiaDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EloquiaDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Injection>
      <Head>
        <title>Macro Counter - Calculate Nutritional Content of Your Meals</title>
        <meta
          name="description"
          content="Free online macro calculator to track carbs, protein, and fat content in your food. Easy-to-use nutrition tool for meal planning and macro counting."
        />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <main
        className={clsx(inter.className, eloqua.className, styles.main, {
          [styles.hidden]: pageProps.page?.pageView.options.overflowX,
        })}
      >
        <Component {...pageProps} />
      </main>
    </Injection>
  )
}

export default App
