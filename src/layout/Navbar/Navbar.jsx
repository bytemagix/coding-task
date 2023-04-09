import { useContext, useState } from "react";
import Drawer from "./Drawer/Drawer";
import styles from "./Navbar.module.scss";
import Backdrop from "../../stories/Backdrop/Backdrop";
import { ThemeContext } from "../../context/themeContext";
import { THEMES } from "../../constants/constants";

const Navbar = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, onThemeChange } = useContext(ThemeContext);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["brand"]}>
          <h3>Quote Block App</h3>
        </div>
        <div className={styles["menu"]}>
          <div className={styles["menu-icon"]} onClick={openDrawerHandler}>
            <span className={styles["menu-icon__line"]}></span>
            <span className={styles["menu-icon__line"]}></span>
            <span className={styles["menu-icon__line"]}></span>
          </div>
          <div className={styles["menu-items"]}>
            <span className={styles["label"]}>App Theme</span>
            <span
              className={
                styles[theme === THEMES.BrandA ? "btn-active" : "btn-inactive"]
              }
              onClick={() => onThemeChange(THEMES.BrandA)}
            >
              Brand A
            </span>
            <span
              className={
                styles[theme === THEMES.BrandB ? "btn-active" : "btn-inactive"]
              }
              onClick={() => onThemeChange(THEMES.BrandB)}
            >
              Brand B
            </span>
          </div>
        </div>
      </nav>
      {isDrawerOpen && <Drawer />}
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
    </>
  );
};

export default Navbar;
