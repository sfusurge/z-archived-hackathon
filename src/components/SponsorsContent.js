import Sponsor from './Sponsor'

import styles from '../css/SponsorsContent.module.css'

import sponsors from '../utils/sponsorsList'

const sponsorResolver = require.context('../assets/sponsors', false, /.*\.png/)

const SponsorsContent = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        This event wouldn’t be possible without all of the community support!
      </p>
      <div className={styles.innerContainer}>
        <span className={styles.line} />
        {sponsors.map((sponsor, i) => (
          <>
            {i !== 0 && i % 4 === 0 && <span className={styles.line} />}
            <div className={styles.sponsors}>
              <Sponsor
                src={sponsorResolver(sponsor.src).default}
                name={sponsor.name}
                width={sponsor.width}
              />
            </div>
          </>
        ))}
        <span className={styles.line} />
      </div>
    </div>
  )
}

export default SponsorsContent
