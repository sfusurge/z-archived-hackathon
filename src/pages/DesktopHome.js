import { useTheme } from '../utils/toggleTheme'
import { useState } from 'react'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FileIconGroup from '../components/FileIconGroup.js'
import SideBar from '../components/SideBar'

import styles from '../css/DesktopHome.module.css'

import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const DesktopHome = props => {
  const [sideBar, setSideBar] = useState()
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
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
            height: '163px'
          }}
        />
      </div>
      <div className={styles.splash}>
        <div className={styles.splashImg}></div>
      </div>
      <div className={sideBar ? styles.sideBarActive : styles.sideBar}>
        <SideBar />
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
