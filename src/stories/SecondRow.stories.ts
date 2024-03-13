import type { Meta, StoryObj } from "@storybook/react";

import SecondRow from "./SecondRow";

const meta: Meta<typeof SecondRow> = {
  title: "SecondRow",
  component: SecondRow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SecondRow>;

export const Component: Story = {
  name: "Component",
  args: {
    scale: 75,
  },
};
