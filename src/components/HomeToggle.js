import { useState, useEffect } from "react"
import _ from "lodash"

import MobileHome from "../pages/MobileHome"
import DesktopHome from "../pages/DesktopHome"

const breakpoint = 700;
const Home = props => {
  const [isMobile, setMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = _.throttle(() => {
      if (isMobile && window.innerWidth >= breakpoint) {
        setMobile(false)
      } else if (!isMobile && window.innerWidth < breakpoint) {
        setMobile(true)
      }
    }, 15)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  if (isMobile) {
    return <MobileHome {...props} />
  } else {
    return <DesktopHome {...props} />
  }
}

export default Home