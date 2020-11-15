import toggleTheme from "../utils/toggleTheme";
import styles from "../css/Footer.module.css"

const Footer = props => {
    return(
        <div className={styles.container}>
            <div id = {styles.logoPad}></div>
            <div className={styles.innerContainer}>
                <div className = {styles.hyperLinks}>
                    <a className = {styles.hyperLinks} href="https://www.facebook.com/sfusurge">
                        <p>MLH Code Of Product</p>
                    </a>
                    <a className = {styles.hyperLinks} href="https://www.facebook.com/sfusurge">
                        <p> Meet the Team Behind StormHacks</p>
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