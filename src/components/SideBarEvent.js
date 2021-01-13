import styles from '../css/SideBarEvent.module.css'

const SideBarEvents = props => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>{props.date}</p>
      <span className={styles.line} />
      {props.events.map(({ link, customStyle, img, eventName, eventTime }) => (
        <a
          href={link}
          key={eventName}
          target="_blank"
          rel="noreferrer"
          style={customStyle}
          className={styles.links}
        >
          <div className={styles.innerContainer}>
            <div className={styles.img} id={styles[img]} />
            <div className={styles.eventDescription}>
              <p className={styles.eventText}>{eventName}</p>
              <p className={styles.eventText}>{eventTime}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default SideBarEvents
