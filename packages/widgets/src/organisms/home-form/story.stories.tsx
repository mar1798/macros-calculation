import type { StoryFn, Meta } from '@storybook/react'
import { HomeForm } from '.'
import { feedHomeForm } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'

export default {
  title: 'Organisms/HomeForm',
  component: HomeForm,
} satisfies Meta<typeof HomeForm>

const Template: StoryFn<typeof HomeForm> = args => (
  <StoryWrapper>
    <HomeForm {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = feedHomeForm()
