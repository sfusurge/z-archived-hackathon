import Banner from '../components/Banner'
import toggleTheme from '../utils/toggleTheme'
import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'
import styles from '../css/MobilePromo.module.css'

const MobilePromo = props => {
  return (
    <div className={styles.container}>
      <button className={styles.themeButton} onClick={toggleTheme}>
        <div className={styles.themeToggle} />
      </button>
      <div className={styles.banners}>
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
      <div className={styles.box}>
        <div className={styles.title}>
          {"Planning StormHacks..."}
        </div>
        <div className={styles.subtitle}>
          {"February 20 - 21, 2021"}
        </div>
        <div className={styles.otter}/>
        <div className={styles.input}>
          <input className={styles.textBox} placeholder="Enter your email address to stay up to date!"/>
          <button className={styles.button} >{">"}</button>
        </div>
        
      </div>
      
      <div className={styles.logo}/>

    </div>
  )
}

export default MobilePromo
