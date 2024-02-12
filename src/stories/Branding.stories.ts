import type { Meta, StoryObj } from "@storybook/react";

import { Branding } from "./Branding";

const meta: Meta<typeof Branding> = {
  title: "Branding",
  component: Branding,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Branding>;

export const Component: Story = {
  name: "Component",
  args: {
    scale: 75,
  },
};
