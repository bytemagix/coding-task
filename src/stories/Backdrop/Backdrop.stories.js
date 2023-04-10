import Backdrop from "./Backdrop";

export default {
  title: "Component/Backdrop",
  component: Backdrop,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Primary = {
  args: {
    backgroundColor: "#00000080",
  },
};

export const Secondary = {
  args: {
    backgroundColor: "#00000050",
  },
};
