import React from 'react'

import { Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
}

const Template: Story = (args) => <Main {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'Boilerplate',
  description: 'Nextjs'
}
