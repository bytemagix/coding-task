import BrandA from "./BrandA";
import { dummyData } from "../../data/dummy";

export default {
  title: "Quote Block/Brand A",
  component: BrandA,
  tag: ["autodocs"],
  argTypes: {
    componentBackground: { control: "radio", options: ["#FAF5EB", "#ffffff"] },
    textBoxBackground: { control: "radio", options: ["#ffffff", "#FAF5EB"] },
    textColor: { control: "radio", options: ["#282828", "#FFFFFF"] },
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
