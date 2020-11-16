import DesktopFile from '../components/DesktopFile.js'
import About from '../assets/aboutFileIcon.svg'
import Tracks from '../assets/tracksFileIcon.svg'
import Sponsors from '../assets/sponsorsFileIcon.svg'
import Terminal from '../assets/terminalFileIcon.svg'
import Faq from '../assets/faqFileIcon.svg'

const FileIconGroup = () => {
  return (
    <>
      <DesktopFile icon={About} text="What is StormHacks" />
      <DesktopFile icon={Tracks} text="Event Tracks" />
      <DesktopFile icon={Sponsors} text="Sponsors" />
      <DesktopFile icon={Terminal} text="Apply.exe" />
      <DesktopFile icon={Faq} text="FAQ" />
    </>
  )
}
export default FileIconGroup
