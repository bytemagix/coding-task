import { useContext } from "react";
import styles from "./Drawer.module.scss";
import { ThemeContext } from "../../../context/themeContext";
import { BRAND_A_THEME, BRAND_B_THEME } from "../../../constants/constants";

const Drawer = (props) => {
  const { theme, onThemeChange } = useContext(ThemeContext);

  const themeChangeHandler = (theme) => {
    onThemeChange(theme);
  };
  return (
    <div className={styles["drawer"]}>
      <div className={styles["menu-items"]}>
        <span className={styles["label"]}>App Theme</span>
        <span
          className={
            styles[theme === BRAND_A_THEME ? "btn-active" : "btn-inactive"]
          }
          onClick={themeChangeHandler.bind(this, BRAND_A_THEME)}
        >
          Brand A
        </span>
        <span
          className={
            styles[theme === BRAND_B_THEME ? "btn-active" : "btn-inactive"]
          }
          onClick={themeChangeHandler.bind(this, BRAND_B_THEME)}
        >
          Brand B
        </span>
      </div>
    </div>
  );
};

export default Drawer;
