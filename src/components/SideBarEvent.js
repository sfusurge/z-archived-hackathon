import styles from '../css/SideBarEvent.module.css'
const SideBarEvents = props => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{props.date}</p>
      <span className={styles.line} />
    </div>
  )
}

export default SideBarEvents
