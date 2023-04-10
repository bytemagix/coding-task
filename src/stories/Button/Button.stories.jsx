import Button from "./Button";
import { dummyData } from "../../data/dummy";

export default {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  // Controls are defined to change borderColor, backgroundColor & textColor
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
  },
};

// Pass any type of supported props here or can be also change from UI under controls
export const Primary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    textColor: "white",
    variant: "primary",
    onClick: () => {
      console.log("Button Clicked");
    },
  },
};

// Pass any type of supported props here or can be also change from UI under controls
export const Secondary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    variant: "secondary",
  },
};
