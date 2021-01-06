import styles from '../css/SocialsIcons.module.css'

const SocialsIcons = props => {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/sfusurge"
        target="_blank"
        rel="noreferrer"
        className={styles.iconLink}
      >
        <div className={styles.github} />
      </a>
      <a
        href="https://www.instagram.com/sfusurge/"
        target="_blank"
        rel="noreferrer"
        className={styles.iconLink}
      >
        <div className={styles.instagram} />
      </a>
      <a
        href="https://www.facebook.com/sfusurge"
        target="_blank"
        rel="noreferrer"
        className={styles.iconLink}
      >
        <div className={styles.facebook} />
      </a>
      <a
        href="https://www.linkedin.com/company/sfu-surge/"
        target="_blank"
        rel="noreferrer"
        className={styles.iconLink}
      >
        <div className={styles.linkedin} />
      </a>
    </div>
  )
}

export default SocialsIcons
