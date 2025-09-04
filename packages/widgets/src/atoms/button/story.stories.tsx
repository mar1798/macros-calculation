import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'
import { Button } from '.'
import { StoryWrapper } from '../../stories/wrapper'
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'stroke', 'plain'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small', 'extra-large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>

const template: StoryFn<typeof Button> = args => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
)

export const Default = template.bind({})
Default.parameters = {
  layout: 'centered',
}
Default.args = {
  disabled: false,
  children: 'Button',
  variant: 'primary',
  size: 'large',
  type: 'button',
}

export const ButtonWithIcons = template.bind({})
ButtonWithIcons.parameters = {
  layout: 'centered',
}
ButtonWithIcons.args = {
  startIcon: ChevronRight,
  endIcon: ChevronRight,
  children: 'Button',
  disabled: false,
  variant: 'primary',
  size: 'large',
  type: 'button',
}
