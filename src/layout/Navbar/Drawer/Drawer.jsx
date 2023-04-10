import styles from "./Drawer.module.scss";
import MenuItems from "../../MenuItems/MenuItems";

const Drawer = (props) => {
  return (
    <div className={styles["drawer"]}>
      <div className={styles["actions"]}>
        <MenuItems onClose={props.onClose} />
      </div>
    </div>
  );
};

export default Drawer;
