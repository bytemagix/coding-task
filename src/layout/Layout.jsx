import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "../context/themeContext";
import styles from "./Layout.module.scss";

const Layout = (props) => {
  const { theme, onThemeChange } = useContext(ThemeContext);
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <Navbar />
      </header>
      <main className={styles[theme == "BrandA" ? "branda" : "brandb"]}>
        {props.children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
