import styles from "./MenuItems.module.scss";
import Button from "../../stories/Button/Button";
import { THEMES } from "../../constants/constants";
import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const MenuItems = (props) => {
  const { theme, onThemeChange } = useContext(ThemeContext);
  return (
    <div className={styles["menu-items"]}>
      <span className={styles["label"]}>App Theme</span>
      {/* This button is to change the theme to Brand A Theme */}
      <Button
        title="Brand A"
        variant={theme.title === THEMES.BrandA.title ? "primary" : "secondary"}
        onClick={() => {
          onThemeChange(THEMES.BrandA.title, THEMES.BrandA.fontFamily);
          props.onClose();
        }}
      />
      {/* This button is to change the theme to Brand B Theme */}
      <Button
        title="Brand B"
        variant={theme.title === THEMES.BrandB.title ? "primary" : "secondary"}
        onClick={() => {
          onThemeChange(THEMES.BrandB.title, THEMES.BrandB.fontFamily);
          props.onClose();
        }}
      />
    </div>
  );
};

export default MenuItems;
