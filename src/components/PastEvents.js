import styles from '../css/PastEvents.module.css'
const imageResolver = require.context(
  '../assets/eventPictures',
  false,
  /.*\.png/
)
const PastEvents = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>
          SFU Surge has held 25 events since it’s inception in September 2019,
          engaging 700+ students interested in tech. We hope to continue this
          mission with StormHacks 2021!
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.menu}>
          <p>View by: Date taken</p>
          <div className={styles.gridBtn}> </div>
        </div>
        <div className={styles.images}>
          <img
            className={styles.img1}
            src={imageResolver('./2020_1.png').default}
            alt="image1"
          />
          <img src={imageResolver('./2020_2.png').default} alt="image2" />
          <img src={imageResolver('./2020_3.png').default} alt="image3" />
          <img src={imageResolver('./2020_4.png').default} alt="image4" />
          <img src={imageResolver('./2020_5.png').default} alt="image5" />
        </div>
      </div>
    </div>
  )
}

export default PastEvents
