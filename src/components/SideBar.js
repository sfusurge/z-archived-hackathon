import styles from '../css/SideBar.module.css'
import SideBarEvent from './SideBarEvent'
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Schedule</p>
      </div>
      <SideBarEvent date={'Day 1: February 20th, 2021'} />
    </div>
  )
}

export default SideBar
