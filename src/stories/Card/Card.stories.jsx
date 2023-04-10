import Card from "./Card";

export default {
  title: "Component/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    children: <p>Dummy Text</p>,
  },
};

export const Secondary = {
  args: {
    backgroundColor: "#F37598",
    textColor: "#000000",
    children: <p>Dummy Text</p>,
  },
};
