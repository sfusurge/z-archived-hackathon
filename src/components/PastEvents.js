import styles from '../css/PastEvents.module.css'
const imageResolver = require.context(
  '../assets/eventPictures',
  false,
  /.*\.png/
)
const PastEvents = props => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p className={styles.headerText}>
          SFU Surge has held 25 events since it’s inception in September 2019,
          engaging 700+ students interested in tech. We hope to continue this
          mission with StormHacks 2021!
        </p>
        <div className={styles.menu}>
          <div className={styles.subHeaderText}>
            <p className={styles.viewBy}>View by:</p>
            <p className={styles.viewBy}> Date taken</p>
          </div>
          <div className={styles.gridBtn}>
            <div className={styles.gridIcon} />
            <span className={styles.orangeOutline}></span>
          </div>
        </div>
        <p className={styles.date}>2020</p>
        <div className={styles.images2020}>
          <img
            className={styles.img1}
            src={imageResolver('./2020_1.png').default}
            alt="image1"
          />
          <img
            className={styles.img2}
            src={imageResolver('./2020_2.png').default}
            alt="image2"
          />
          <img
            className={styles.img3}
            src={imageResolver('./2020_3.png').default}
            alt="image3"
          />
          <img
            className={styles.img4}
            src={imageResolver('./2020_4.png').default}
            alt="image4"
          />
          <img
            className={styles.img5}
            src={imageResolver('./2020_5.png').default}
            alt="image5"
          />
        </div>
        <p className={styles.date}>2019</p>
        <div className={styles.images2019}>
          <img
            className={styles.img1_19}
            src={imageResolver('./2019_1.png').default}
            alt="image1"
          />
          <img
            className={styles.img2_19}
            src={imageResolver('./2019_2.png').default}
            alt="image2"
          />
          <img
            className={styles.img3_19}
            src={imageResolver('./2019_3.png').default}
            alt="image3"
          />
          <img
            className={styles.img4_19}
            src={imageResolver('./2019_4.png').default}
            alt="image4"
          />
          <img
            className={styles.img5_19}
            src={imageResolver('./2019_5.png').default}
            alt="image5"
          />
        </div>
      </div>
    </div>
  )
}

export default PastEvents
