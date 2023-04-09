import Button from "./Button";
import { dummyData } from "../../data/dummy";

export default {
  title: "Component/Button",
  component: Button,
  tag: ["autodocs"],
};

export const Primary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    variant: "secondary",
  },
};
