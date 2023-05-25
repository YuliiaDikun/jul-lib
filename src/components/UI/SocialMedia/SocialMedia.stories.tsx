import React from "react";
import { ComponentStory, ComponentMeta} from "@storybook/react";
import SocialMedia from "./SocialMedia";

export default {
  title: "jul-lib/SocialMedia",
  component: SocialMedia,
} 
const Template: ComponentStory<typeof SocialMedia> = (args) => <SocialMedia {...args} />;

export const JulSocial = Template.bind({});