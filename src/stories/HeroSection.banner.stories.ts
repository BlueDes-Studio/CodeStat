import type { Meta, StoryObj } from "@storybook/react";

import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Component: Story = {
  name: "Component",
  args: {
    scale: 75,
  },
};
