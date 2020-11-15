import surgeIcon from '../assets/light/surgeIcon-light.svg'
import lightModeIcon from '../assets/light/lightmodeIcon-desktop.svg'
import notificationsIcon from '../assets/notifications-icon.svg'
import styles from "../css/Footer.module.css"

const Footer = props => {
    return(
        <div className={styles.container}>
            <img id = {styles.logoPad} src={surgeIcon}></img>
            <div className={styles.innerContainer}>
                <div className = {styles.hyperLinks}>
                    <a className = {styles.hyperLinks} href="https://www.facebook.com/sfusurge">
                        <p>MLH Code Of Product</p>
                    </a>
                    <a className = {styles.hyperLinks} href="https://www.facebook.com/sfusurge">
                        <p> Meet the Team Behind StormHacks</p>
                    </a>
                </div>
                <img src={lightModeIcon}></img>
                <img src={notificationsIcon}></img>
            </div>
        </div>
    )
}
export default Footer