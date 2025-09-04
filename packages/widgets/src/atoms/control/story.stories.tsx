import type { StoryFn, Meta } from '@storybook/react'
import { Control } from '.'
import { feedControl } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'

export default {
  title: 'Atoms/Control',
  component: Control,
} satisfies Meta<typeof Control>

const Template: StoryFn<typeof Control> = args => (
  <StoryWrapper>
    <Control {...args}>
      <span>"Place for your advertisement"</span>
    </Control>
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
Default.args = feedControl()
