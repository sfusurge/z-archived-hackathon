import styles from '../css/MobileIntroduction.module.css'

const MobileIntroduction = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>What is StormHacks?</p>
      <p className={styles.subheading}>SFU'S Premiere Hackathon</p>
      <p className={styles.text}>
        With interactive workshops, cross-team bonding activities, and a bounty
        of company swag, StormHacks is ready to welcome hackers, designers,
        engineers, and tech enthusiasts to our inaugural virtual hackathon.
      </p>
      <p className={styles.text}>
        On February 20 - 21, 2021, innovative individuals will come together to
        embrace their passion for technology - all in the span of 24 hours.
        Together they will face insurrmountable challenges as they design ideas
        and create impactful projects.
      </p>
      <p className={styles.closingText}>We hope to see you at StormHacks!</p>
    </div>
  )
}

export default MobileIntroduction
