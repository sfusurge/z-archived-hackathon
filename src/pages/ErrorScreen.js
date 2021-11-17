import styles from '../css/ErrorScreen.module.css'
import otterError from '../assets/otterError.svg'
import { Link } from 'react-router-dom'

const ErrorScreen = props => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img
          src={otterError}
          alt={otterError}
          className={styles.otterError}
        ></img>
        <p className={styles.text} id={styles.headerText}>
          StormHacks 2022 will be live from February, 18th to 20th, 2022. In the
          meantime, we’ll be updating this page for you.
        </p>
        <Link to="/stormhacks2021" className={styles.smallText}>
          To restore to a previous version, click here.
        </Link>

        <div className={styles.mailListGroup}>
          <p className={styles.smallText}>
            To be the first to know everything about StormHacks 2022, including
            when to apply, sign up for our mailing list below.
          </p>
          <form
            className={styles.signUpForm}
            action="https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
          >
            <input
              className={styles.signUpInput}
              type="email"
              name="EMAIL"
              placeholder="Your email address"
              noValidate
            />

            <button className={styles.signUpButton} type="submit">
              Sign me up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ErrorScreen
