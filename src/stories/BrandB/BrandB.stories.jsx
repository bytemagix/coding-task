import BrandB from "./BrandB";
import { dummyData } from "../../data/dummy";

export default {
  title: "Quote Block/Brand B",
  component: BrandB,
  tag: ["autodocs"],
  argTypes: {
    componentBackground: { control: "radio", options: ["#F6F6F6 ", "#E6F1FA"] },
    textBoxBackground: {
      control: "radio",
      options: ["#ffffff", "#F6F6F6", "#E6F1FA", "#0057B7"],
    },
    textColor: { control: "radio", options: ["#282828", "#FFFFFF", "#000000"] },
  },
};

export const Primary = {
  args: {
    title: dummyData.title,
    subTitle: dummyData.subTitle,
    description: dummyData.description,
    ctaPrimary: dummyData.ctaLinks[0].text,
    ctaSecondary: dummyData.ctaLinks[1].text,
    titleUnderline: true,
    componentBackground: "#FAF5EB",
  },
};

export const Secondary = {
  args: {
    title: dummyData.title,
    subTitle: dummyData.subTitle,
    description: dummyData.description,
    ctaPrimary: dummyData.ctaLinks[0].text,
    ctaSecondary: dummyData.ctaLinks[1].text,
    titleUnderline: true,
    componentBackground: "#ffffff",
  },
};
