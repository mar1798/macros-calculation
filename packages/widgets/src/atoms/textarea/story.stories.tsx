import type { StoryFn, Meta } from '@storybook/react'
import { Textarea } from '.'
import { feedBaseInputText } from '../../stories/feed'
import { StoryWrapper } from '../../stories/wrapper'
import { useState } from 'react'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

const Template: StoryFn<typeof Textarea> = args => {
  const [state, setState] = useState<string>('')
  const handleChange = (value: string) => {
    setState(value)
  }

  return (
    <StoryWrapper>
      <Textarea {...args} value={state} onChange={handleChange} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
Default.args = {
  ...feedBaseInputText(),
  type: 'textarea',
}
