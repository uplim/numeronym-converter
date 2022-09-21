import { StoryObj, ComponentMeta } from '@storybook/react'
import { Button } from '@/components/Buttons'

export default {
  component: Button,
  argTypes: {
    label: {
      description: 'ボタンに表示される文字を渡してください'
    },
    onClick: {
      description: 'ボタンをクリックしたときに実行される関数を渡してください'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: StoryObj = {
  args: {
    label: 'こんばーと',
    onClick: () => 0
  }
}
