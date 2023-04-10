import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { dummyData } from "../../data/dummy";

export const Button = ({
  title,
  variant,
  backgroundColor,
  borderColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className={
        styles[variant === "primary" ? "button-primary" : "button-secondary"]
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

// Put any of supported props as a default props
Button.defaultProps = {
  title: dummyData.title,
  variant: "primary",
};

export default Button;
