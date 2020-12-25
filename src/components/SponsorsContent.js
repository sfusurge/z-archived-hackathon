import Sponsor from './Sponsor'

import styles from '../css/SponsorsContent.module.css'

import sponsors from '../utils/sponsorsList'
import getTheme from '../utils/getTheme'

const sponsorResolver = require.context('../assets/sponsors', false, /.*\.png/)

const getSrc = sponsor => {
  if (getTheme() === 'dark' && sponsor.srcDark) {
    return sponsor.srcDark
  } else {
    return sponsor.srcLight
  }
}

const SponsorsContent = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        This event wouldn’t be possible without all of the community support!
      </p>
      <div className={styles.innerContainer}>
        {sponsors.map(sponsor => (
          <>
            {sponsor.srcLight ? (
              <div className={styles.sponsors}>
                <Sponsor
                  src={sponsorResolver(getSrc(sponsor)).default}
                  name={sponsor.name}
                  width={sponsor.width}
                  link={sponsor.link}
                />
              </div>
            ) : (
              <div className={styles.expand}></div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default SponsorsContent
