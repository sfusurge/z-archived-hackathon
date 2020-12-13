import ExecMember from './ExecMember'
import styles from '../css/MobileExec.module.css'
import execs from '../utils/ExecsList'
const MobileExecs = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Meet The Execs</p>
      <div className={styles.execContainer}>
        {execs.map((exec, i) => (
          <div className={styles.execs}>
            <ExecMember
              src={exec.src}
              width={exec.width}
              height={exec.height}
              name={exec.name}
              link={exec.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileExecs
