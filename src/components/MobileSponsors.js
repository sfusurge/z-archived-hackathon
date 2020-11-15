import styles from '../css/MobileSponsors.module.css'

import sfss from '../assets/sfss-logo.svg'

const MobileSponsors = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Sponsors</p>
      <div className={styles.sponsorContainer}>
        <img src={sfss} alt="SFSS Logo" />
      </div>
    </div>
  )
}

export default MobileSponsors
