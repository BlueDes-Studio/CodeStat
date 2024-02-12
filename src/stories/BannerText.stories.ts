import type { Meta, StoryObj } from "@storybook/react";

import { BannerText } from "./BannerText";

const meta: Meta<typeof BannerText> = {
  title: "BannerText",
  component: BannerText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BannerText>;

export const Component: Story = {
  name: "Component",
  args: {},
};
