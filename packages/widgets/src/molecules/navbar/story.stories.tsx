import type { StoryFn, Meta } from '@storybook/react'
import { Navbar } from '.'
import { feedHeader } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>

const Template: StoryFn<typeof Navbar> = args => (
  <StoryWrapper>
    <Navbar {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.parameters = {
  layout: 'top',
}
Default.args = feedHeader()
