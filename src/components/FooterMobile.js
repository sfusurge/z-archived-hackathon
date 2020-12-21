import styles from '../css/FooterMobile.module.css'

const FooterMobile = props => {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        target="_blank"
        rel="noreferrer"
      >
        MLH Code of Conduct
      </a>
    </div>
  )
}

export default FooterMobile
