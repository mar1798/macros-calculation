import type { StoryFn, Meta } from '@storybook/react'
import { MainForm } from '.'
import { feedMainForm } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'

export default {
  title: 'Molecules/MainForm',
  component: MainForm,
} satisfies Meta<typeof MainForm>

const Template: StoryFn<typeof MainForm> = args => (
  <StoryWrapper>
    <MainForm {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = feedMainForm()
