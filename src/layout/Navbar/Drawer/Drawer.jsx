import { useContext } from "react";
import styles from "./Drawer.module.scss";
import { ThemeContext } from "../../../context/themeContext";

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
          className={styles[theme == "BrandA" ? "btn-active" : "btn-inactive"]}
          onClick={themeChangeHandler.bind(this, "BrandA")}
        >
          Brand A
        </span>
        <span
          className={styles[theme == "BrandB" ? "btn-active" : "btn-inactive"]}
          onClick={themeChangeHandler.bind(this, "BrandB")}
        >
          Brand B
        </span>
      </div>
    </div>
  );
};

export default Drawer;
