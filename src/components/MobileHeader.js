import toggleTheme from '../utils/toggleTheme'

import styles from '../css/MobileHeader.module.css'

import Banner from '../components/Banner'
import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const MobileHeader = props => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.headerContainer}>
        <button className={styles.themeButton} onClick={toggleTheme}>
          <div className={styles.themeToggle} />
        </button>
        <Banner
          width="110"
          surge={{
            src: surgeBanner,
            alt: 'Surge Banner',
            width: '45px',
            height: '87px'
          }}
          mlh={{
            src: mlhBanner,
            alt: 'MLH Banner',
            width: '50px',
            height: '87px'
          }}
        />
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.stormhacksLogo} />
          <p className={styles.title}>STORM HACKS</p>
        </div>
        <p className={styles.date}>FEBRUARY 20 - 21, 2021</p>
        <p className={styles.subheading}>24 hours. 300+ Hackers.</p>
        <p className={styles.subheader}>
          Are you ready <br />
          to learn, create, and inspire?
        </p>
        <button className={styles.applyButton}>APPLY NOW</button>
      </div>
    </div>
  )
}

export default MobileHeader
