import type { StoryFn, Meta } from '@storybook/react'
import { Layout } from '.'
import { feedLayout } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'

export default {
  title: 'Organisms/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>

const Template: StoryFn<typeof Layout> = args => (
  <StoryWrapper>
    <Layout {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
Default.args = feedLayout()
