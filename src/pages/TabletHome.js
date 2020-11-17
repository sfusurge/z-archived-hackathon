import MobileHeader from '../components/MobileHeader'
import AboutContext from '../components/AboutContext'
import EventTracks from '../components/EventTracks'
import FaqMobile from '../components/FaqMobile'
import MobileSponsors from '../components/MobileSponsors'
import FooterMobile from '../components/FooterMobile'

import styles from '../css/TabletHome.module.css'

const TabletHome = props => {
  return (
    <div className={styles.container}>
      <MobileHeader tabletMode />
      <AboutContext tabletMode />
      <EventTracks />
      <FaqMobile />
      <MobileSponsors />
      <FooterMobile />
    </div>
  )
}

export default TabletHome
