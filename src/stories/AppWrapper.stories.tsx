import type { Meta, StoryObj } from "@storybook/react";

import { AppWrapper } from "./AppWrapper";

const meta: Meta<typeof AppWrapper> = {
  title: "AppWrapper",
  component: AppWrapper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppWrapper>;

export const Component: Story = {
  name: "Component",
  args: {
    overlayLogo: true,
    visibile: true,
  },
};
