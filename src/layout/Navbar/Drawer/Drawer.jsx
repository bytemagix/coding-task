import { useContext } from "react";
import styles from "./Drawer.module.scss";
import { ThemeContext } from "../../../context/themeContext";
import { THEMES } from "../../../constants/constants";

const Drawer = (props) => {
  const { theme, onThemeChange } = useContext(ThemeContext);

  return (
    <div className={styles["drawer"]}>
      <div className={styles["menu-items"]}>
        <span className={styles["label"]}>App Theme</span>
        <span
          className={
            styles[
              theme.title === THEMES.BrandA.title
                ? "btn-active"
                : "btn-inactive"
            ]
          }
          onClick={() =>
            onThemeChange(
              THEMES.BrandA.title,
              THEMES.BrandA.fontFamily,
              THEMES.BrandA.backgroundColor
            )
          }
        >
          Brand A
        </span>
        <span
          className={
            styles[
              theme.title === THEMES.BrandB.title
                ? "btn-active"
                : "btn-inactive"
            ]
          }
          onClick={() =>
            onThemeChange(
              THEMES.BrandA.title,
              THEMES.BrandA.fontFamily,
              THEMES.BrandA.backgroundColor
            )
          }
        >
          Brand B
        </span>
      </div>
    </div>
  );
};

export default Drawer;
