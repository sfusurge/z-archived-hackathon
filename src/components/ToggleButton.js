import toggleTheme from '../utils/toggleTheme'

import styles from '../css/ToggleButton.module.css'

const MobileHeader = props => {
  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      <div className={styles.themeToggle} />
    </button>
  )
}

export default MobileHeader
