import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "../context/themeContext";
import styles from "./Layout.module.scss";
import { THEMES } from "../constants/constants";

const Layout = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <Navbar />
      </header>
      <main
        className={
          styles[theme.title === THEMES.BrandA.title ? "brand-a" : "brand-b"]
        }
      >
        {props.children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
