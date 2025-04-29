import type { Meta, StoryObj } from "@storybook/react";

import TimelineDecorator from "../utils/stories/decorators/Timeline";
import { generateStoryData } from "../utils/stories/utils";

import KonvaTimeline from ".";

const meta = {
  title: "Scenario/Monthly Report",
  component: KonvaTimeline,
  decorators: [TimelineDecorator],
  tags: ["autodocs"],
  argTypes: {
    onTaskChange: {
      type: "function",
    },
  },
} satisfies Meta<typeof KonvaTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const monthlyStoryData = generateStoryData({
  averageTaskDurationInMinutes: 10,
  resourcesCount: 16,
  tasksCount: 5000,
  timeRangeInDays: 60,
});

export const MonthlyReport: Story = {
  args: {
    ...monthlyStoryData,
    resolution: "1min",
    onAreaSelect: undefined,
  },
};
