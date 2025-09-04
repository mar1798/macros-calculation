import type { StoryFn, Meta } from '@storybook/react'
import { BaseInput } from '.'
import { StoryWrapper } from '../../stories/wrapper'
import { useState } from 'react'
import { feedBaseInputText } from '../../stories/feed'
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg'

export default {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  argTypes: {
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof BaseInput>

const Template: StoryFn<typeof BaseInput> = args => {
  const [state, setState] = useState<string>('')
  const handleChange = (value: string) => {
    setState(value)
  }

  return (
    <StoryWrapper>
      <BaseInput {...args} value={state} onChange={handleChange} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
Default.args = feedBaseInputText()

export const DefaultWithIcons = Template.bind({})
DefaultWithIcons.parameters = {
  layout: 'centered',
}
DefaultWithIcons.args = {
  ...feedBaseInputText(),
  startIcon: ChevronRight,
  endIcon: ChevronRight,
}
