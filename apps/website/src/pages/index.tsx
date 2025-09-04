import React from 'react'
import { Api } from '@/lib/api'
import { publicConfig } from '@/сonfig'
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import { HomeForm } from 'widgets/organisms'
import { IHomeFormProps } from 'widgets/types'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: React.FC<Props> = ({ homeFormProps }) => {
  return (
    <div>
      <HomeForm {...homeFormProps} />
    </div>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ homeFormProps: IHomeFormProps }>
> {
  const client = new Api({ baseUrl: publicConfig('baseUrl') })
  const [homeFormProps] = await Promise.all([client.getRequest('getHomeFormProps', null)])

  return {
    props: {
      homeFormProps,
    },
  }
}

export default Home
