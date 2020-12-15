import ExecMember from './ExecMember'
import styles from '../css/AllExecs.module.css'
import execs from '../utils/execList'

const execResolver = require.context('../assets/execs', false, /.*\.png/)

const breakLine = (exec, idx) => {
  console.log(execResolver(exec.src))
  if (idx !== 0 && idx % 4 === 0) {
    return (
      <>
        <span className={styles.line} />
        <div className={styles.execs}>
          <ExecMember
            src={execResolver(exec.src).default}
            width={exec.width}
            height={exec.height}
            name={exec.name}
            link={exec.link}
            customStyle={exec.customStyle}
          />
        </div>
      </>
    )
  } else {
    return (
      <div className={styles.execs}>
        <ExecMember
          src={execResolver(exec.src).default}
          width={exec.width}
          height={exec.height}
          name={exec.name}
          link={exec.link}
          customStyle={exec.customStyle}
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
