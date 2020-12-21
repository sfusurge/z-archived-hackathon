import Sponsor from './Sponsor'

import styles from '../css/SponsorsContent.module.css'

import sfssLogo from '../assets/sfss-logo.png'

// TODO: make array and use map
// const sponsors = []

const SponsorsContent = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        This event wouldn’t be possible without all of the community support!
      </p>
      <span className={styles.line} />
      <div className={styles.sponsors}>
        <Sponsor src={sfssLogo} name="SFSS.png" width="180px" height="62px" />
      </div>
      <span className={styles.line} />
      <div className={styles.sponsors}></div>
      <span className={styles.line} />
      <div className={styles.sponsors}></div>
      <span className={styles.line} />
      <div className={styles.sponsors}></div>
    </div>
  )
}

export default SponsorsContent
