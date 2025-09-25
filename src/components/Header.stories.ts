import { Meta, StoryObj } from '@storybook/vue3'
import Header from './Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    // ToDo: Add argTypes
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
