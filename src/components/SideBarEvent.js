import styles from '../css/SideBarEvent.module.css'

const SideBarEvents = props => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{props.date}</p>
      <span className={styles.line} />
      {props.events.map(event => (
        <a
          href={event.link}
          target="_blank"
          rel="noreferrer"
          style={event.customStyle}
          className={styles.links}
        >
          <div className={styles.innerContainer}>
            <div className={styles[event.img]} />
            <div className={styles.eventDescription}>
              <p className={styles.eventText}>{event.eventName}</p>
              <p className={styles.eventText}>{event.eventTime}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default SideBarEvents
