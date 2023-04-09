import Card from "./Card";
import { dummyData } from "../../data/dummy";

export default {
  title: "Component/Card",
  component: Card,
  tag: ["autodocs"],
};

export const Primary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    variant: "primary",
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    children: <p>Dummy Text</p>,
  },
};

export const Secondary = {
  args: {
    title: dummyData.ctaLinks[0].text,
    variant: "secondary",
    backgroundColor: "#F37598",
    textColor: "#000000",
    children: <p>Dummy Text</p>,
  },
};
