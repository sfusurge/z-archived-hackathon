import toggleTheme from "../utils/toggleTheme";

import styles from "../css/MobileHeader.module.css";

import Banner from "../components/Banner";

const MobileHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.headerContainer}>
          <button className={styles.themeButton} onClick={toggleTheme}>
            <div className={styles.themeToggle} />
          </button>
          <Banner width="110" />
        </div>
        <div className={styles.headingContainer}>
          <div className={styles.stormhacksLogo} />
          <div className={styles.titleContainer}>
            <p className={styles.headingText}>STORM HACKS</p>
            <p className={styles.dateText}>FEBRUARY 20 - 21, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
