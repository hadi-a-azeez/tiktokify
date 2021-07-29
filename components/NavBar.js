import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>tiktokify</h1>
      </div>
      <div className={styles.center}>
        <h1 className={styles.link}>Features</h1>
        <h1 className={styles.link}>Pricing</h1>
        <h1 className={styles.link}>About Us</h1>
        <h1 className={styles.link}>Contact Us</h1>
      </div>
      <div className={styles.right}>
        <button className={styles.btn}>Install on Shopify</button>
      </div>
    </div>
  );
};

export default NavBar;
