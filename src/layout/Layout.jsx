import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "../context/themeContext";
import styles from "./Layout.module.scss";
import { BRAND_A_THEME } from "../constants/constants";

const Layout = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <Navbar />
      </header>
      <main className={styles[theme === BRAND_A_THEME ? "branda" : "brandb"]}>
        {props.children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
