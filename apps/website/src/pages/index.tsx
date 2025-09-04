import React from 'react'
import { Api } from '@/lib/api'
import { publicConfig } from '@/сonfig'
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import { HomeForm } from 'widgets/organisms'
import { IHomeProps } from 'widgets/types'
import MainTemplate from '@/templates/main'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: React.FC<Props> = ({ layout, form }) => {
  return (
    <MainTemplate {...layout}>
      <HomeForm {...form} />
    </MainTemplate>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IHomeProps>> {
  const client = new Api({ baseUrl: publicConfig('baseUrl') })
  const [homeFormProps, header] = await Promise.all([
    client.getRequest('getHomeFormProps', null),
    client.getRequest('getHeaderProps', null),
  ])

  return {
    props: {
      form: homeFormProps,
      layout: {
        header: header,
      },
    },
  }
}

export default Home
