import { ThemeContext } from "./context/themeContext";
import BrandA from "./stories/BrandA/BrandA";
import BrandB from "./stories/BrandB/BrandB";
import { useContext } from "react";
import styles from "./App.module.scss";

function App() {
  const { theme, onThemeChange } = useContext(ThemeContext);
  return (
    <div className={styles[theme == "BrandA" ? "branda" : "brandb"]}>
      <div>
        <span
          onClick={() => {
            onThemeChange("BrandA");
          }}
        >
          Brand A
        </span>
        <span
          onClick={() => {
            onThemeChange("BrandB");
          }}
        >
          Brand B
        </span>
      </div>
      <div className={styles["contents"]}>
        {theme == "BrandA" ? <BrandA /> : <BrandB />}
      </div>
    </div>
  );
}

export default App;
