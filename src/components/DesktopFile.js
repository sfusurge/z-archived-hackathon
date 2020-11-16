import styles from '../css/DesktopFile.module.css'

const DesktopFile = props => {
  return (
    <div className={styles.container}>
      <img src={props.icon} alt="File icon" />
      <p className = {styles.text}>{props.text}</p>
    </div>
  )
}

export default DesktopFile
