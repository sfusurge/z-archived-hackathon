import ExecMember from './ExecMember'
import styles from '../css/AllExecs.module.css'
import execs from '../utils/ExecsList'

const breakLine = (exec, idx) => {
  if (idx !== 0 && idx % 4 === 0) {
    return (
      <>
        <span className={styles.line} />
        <div className={styles.execs}>
          <ExecMember
            src={exec.src}
            width={exec.width}
            height={exec.height}
            name={exec.name}
            link={exec.link}
          />
        </div>
      </>
    )
  } else {
    return (
      <div className={styles.execs}>
        <ExecMember
          src={exec.src}
          width={exec.width}
          height={exec.height}
          name={exec.name}
          link={exec.link}
        />
      </div>
    )
  }
}

const AllExecs = props => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {execs.map((exec, i) => breakLine(exec, i))}
      </div>
    </div>
  )
}

export default AllExecs
