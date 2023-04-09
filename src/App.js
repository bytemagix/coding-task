import { ThemeContext } from "./context/themeContext";
import BrandA from "./stories/BrandA/BrandA";
import BrandB from "./stories/BrandB/BrandB";
import { useContext } from "react";
import styles from "./App.module.scss";
import Layout from "./layout/Layout";
import { THEMES } from "./constants/constants";

function App() {
  const { theme, onThemeChange } = useContext(ThemeContext);
  return (
    <Layout>
      <div
        className={styles["container"]}
        style={
          theme === THEMES.BrandA
            ? { fontFamily: "Arial" }
            : { fontFamily: "Times" }
        }
      >
        {theme == "BrandA" ? <BrandA /> : <BrandB />}
      </div>
    </Layout>
  );
}

export default App;
