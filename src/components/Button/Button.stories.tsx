import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./index"

export default {
  title: "Components/button",
  component: Button,
  args: {
    children: "Button primary",
  },
  argTypes: {
    type: {
      options: ["primary", "secondary", "ghost"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    type: "primary",
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    type: "secondary",
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    type: "ghost",
  },
}
