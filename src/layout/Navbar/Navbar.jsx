import { useState } from "react";
import Drawer from "./Drawer/Drawer";
import styles from "./Navbar.module.scss";
import Backdrop from "../../stories/Backdrop/Backdrop";
import MenuItems from "../MenuItems/MenuItems";

const Navbar = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          <h3 className={styles["header"]}>Quote Block App</h3>
        </div>
        <div className={styles["menu"]}>
          <div className={styles["menu-icon"]} onClick={openDrawerHandler}>
            <span className={styles["menu-icon__line1"]}></span>
            <span className={styles["menu-icon__line2"]}></span>
            <span className={styles["menu-icon__line3"]}></span>
          </div>
          <div className={styles["actions"]}>
            <MenuItems onClose={() => {}} />
          </div>
        </div>
      </nav>
      {/* onClose is passed to automatically close drawer once theme is changed via button click */}
      {isDrawerOpen && <Drawer onClose={closeDrawerHandler} />}
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
    </>
  );
};

export default Navbar;
