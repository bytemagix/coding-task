import { ThemeContext } from "./store/theme-context";
import BrandA from "./stories/BrandA/BrandA";
import BrandB from "./stories/BrandB/BrandB";
import { useContext } from "react";
import styles from "./App.module.scss";
import Layout from "./layout/Layout";
import { THEMES } from "./constants/constants";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      {/* Rendering one of the two Brand with default configurations 
      based on theme. Brand components are configurable via props */}
      <div
        className={styles["container"]}
        style={{ fontFamily: theme.fontFamily }}
      >
        {theme.title === THEMES.BrandA.title ? <BrandA /> : <BrandB />}
      </div>
    </Layout>
  );
}

export default App;
