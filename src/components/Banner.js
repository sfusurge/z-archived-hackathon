import styles from '../css/Banner.module.css'

import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const Banner = props => {
  return (
    <div className={styles.container} style={{ width: `${props.width}px` }}>
      <img
        className={styles.bannerImage}
        src={surgeBanner}
        alt="Surge Banner"
      />
      <img className={styles.bannerImage} src={mlhBanner} alt="MLH Banner" />
    </div>
  )
}

export default Banner
