import Banner from '../components/Banner'

import styles from '../css/DesktopPromo.module.css'

import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const DesktopPromo = props => {
  return (
    <div className={styles.container}>
      <div className={styles.banners}>
        <Banner
          width="207"
          surge={{
            src: surgeBanner,
            alt: 'Surge Banner',
            width: '84px',
            height: '164px'
          }}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.logo}></div>
        <div className={styles.textContainer}>
          <p className={styles.title}>Planning StormHacks...</p>
          <p className={styles.date}>February 20-21, 2021</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopPromo
