import { useState } from 'react'

import toggleTheme from '../utils/toggleTheme'
import styles from '../css/Footer.module.css'

import Modal from '../components/Modal'
import AllExecs from '../components/AllExecs'

const Footer = props => {
  const [isOpen, setIsOpen] = useState(false)

  const openFile = () => {
    setIsOpen(true)
  }

  const closeFile = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.container}>
      {isOpen && (
        <Modal title={'Meet The Execs'} onClose={closeFile}>
          <AllExecs />
        </Modal>
      )}
      <div id={styles.logoPad}></div>
      <div className={styles.innerContainer}>
        <div>
          <a
            className={styles.hyperLinks}
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target='_blank'
            rel='noreferrer'
          >
            MLH Code Of Conduct
          </a>
          <button
            className={styles.hyperLinkBtn}
            onClick={() => {
              openFile()
            }}
          >
            Meet the Team Behind StormHacks
          </button>
        </div>
        <button className={styles.themeButton} onClick={toggleTheme}>
          <div className={styles.themeToggle}></div>
        </button>
        <button className={styles.notificationButton}>
          <div className={styles.notificationIcon}></div>
        </button>
      </div>
    </div>
  )
}
export default Footer
