import AboutContext from "./AboutContext"
import EventTracks from "./EventTracks"
import AllQuestions from "./AllQuestions"
import SponsorsContent from "./SponsorsContent"

import DesktopFile from '../components/DesktopFile.js'
import About from '../assets/aboutFileIcon.svg'
import Tracks from '../assets/tracksFileIcon.svg'
import Sponsors from '../assets/sponsorsFileIcon.svg'
import Terminal from '../assets/terminalFileIcon.svg'
import Faq from '../assets/faqFileIcon.svg'

const FileIconGroup = () => {
  return (
    <>
      <DesktopFile icon={About} Content={AboutContext} text="What is StormHacks" />
      <DesktopFile icon={Tracks} Content={EventTracks} text="Event Tracks" />
      <DesktopFile icon={Sponsors} Content={SponsorsContent} text="Sponsors" />
      <DesktopFile icon={Terminal} text="Apply.exe" />
      <DesktopFile icon={Faq} Content={AllQuestions} text="FAQ" />
    </>
  )
}
export default FileIconGroup
