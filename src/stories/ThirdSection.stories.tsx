import type { Meta, StoryObj } from "@storybook/react";

import ThirdSection from "./ThirdSection";

const meta: Meta<typeof ThirdSection> = {
  title: "ThirdSection",
  component: ThirdSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ThirdSection>;

export const Component: Story = {
  name: "Component",
  args: {
    scale: 75,
  },
};
