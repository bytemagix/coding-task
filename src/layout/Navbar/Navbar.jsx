import { useContext, useState } from "react";
import Drawer from "./Drawer/Drawer";
import styles from "./Navbar.module.scss";
import Backdrop from "../../components/Backdrop/Backdrop";
import { ThemeContext } from "../../context/themeContext";

const Navbar = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, onThemeChange } = useContext(ThemeContext);

  const themeChangeHandler = (theme) => {
    onThemeChange(theme);
  };

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
                styles[theme == "BrandA" ? "btn-active" : "btn-inactive"]
              }
              onClick={themeChangeHandler.bind(this, "BrandA")}
            >
              Brand A
            </span>
            <span
              className={
                styles[theme == "BrandB" ? "btn-active" : "btn-inactive"]
              }
              onClick={themeChangeHandler.bind(this, "BrandB")}
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
