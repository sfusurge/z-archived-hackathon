import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FileIconGroup from '../components/FileIconGroup.js'

import styles from '../css/DesktopHome.module.css'

import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const DesktopHome = props => {
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
          mlh={{
            src: mlhBanner,
            alt: 'MLH Banner',
            width: '93px',
            height: '163px',
            link:
              'https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'
          }}
        />
      </div>
      <div className={styles.splash}>
        <div className={styles.splashImg}></div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div className={styles.files}>
        <FileIconGroup />
      </div>
    </div>
  )
}

export default DesktopHome
