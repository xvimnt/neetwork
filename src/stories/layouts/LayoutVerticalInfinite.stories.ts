import type { Meta, StoryObj } from "@storybook/react";
import { LayoutVerticalInfinite } from "~/components/layouts/LayoutVerticalInfinite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "layouts/LayoutVerticalInfinite",
  component: LayoutVerticalInfinite,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //       backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof LayoutVerticalInfinite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    itemPage: 1,
    page: 1,
    totalPages: 10,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePagination: async () => {},
  },
};

export const WithExtraButtons: Story = {
  args: {
    itemPage: 1,
    page: 1,
    totalPages: 10,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePagination: async () => {},
    extraButtons: "click me",
  },
};
