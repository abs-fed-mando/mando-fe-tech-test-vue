import { Meta, StoryObj } from '@storybook/vue3'
import PageTemplate from './PageTemplate.vue'

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/Landing',
  component: PageTemplate,
  argTypes: {
    // ToDo: Add argTypes
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
