import toggleTheme from "../utils/toggleTheme"
import styles from "../css/Footer.module.css"

const Footer = props => {
    return(
        <div className={styles.container}>
            <div id = {styles.logoPad}></div>
            <div className={styles.innerContainer}>
                <div>
                    <a className = {styles.hyperLinks} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                        MLH Code Of Product
                    </a>
                    <a className = {styles.hyperLinks} href="">
                        Meet the Team Behind StormHacks
                    </a>
                </div>
                <button className = {styles.themeButton} onClick = {toggleTheme}>
                    <div className = {styles.themeToggle}></div>
                </button>
                <button className = {styles.notificationButton}>
                    <div className = {styles.notificationIcon}></div>
                </button>
            </div>
        </div>
    )
}
export default Footer