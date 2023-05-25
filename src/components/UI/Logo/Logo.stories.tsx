import React from "react";
import { ComponentStory, ComponentMeta} from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "jul-lib/Logo",
  component: Logo,
} 
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const JulLogo = Template.bind({});