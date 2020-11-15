import MobileHeader from '../components/MobileHeader.js'
import MobileIntroduction from '../components/MobileIntroduction.js'
import MobileTracks from '../components/MobileTracks.js'
import MobileSponsors from '../components/MobileSponsors.js'
import AllQuestions from '../components/AllQuestions.js'

const TabletHome = props => {
    return(
        <div>
            <MobileHeader/>
            <MobileIntroduction/>
            <MobileTracks/>
            <AllQuestions/>
            <MobileSponsors/>
        </div>
    ) 
}
  
export default TabletHome
  