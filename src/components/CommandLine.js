import styles from '../css/CommandLine.module.css'
import '../css/CommandLine.module.css'
import Typist from 'react-typist'

const CommandLine = props => {
  return (
    <div className={styles.container}>
      <p className={styles.noMargin}> Surge Windows [Version 1.1]</p>
      <p className={styles.padBottom}>(c) 2020 StormHacks Corporation. </p>
      <p className={styles.noMargin}>
        C:\Users\Developer: Surge Activate Developer
      </p>
      <Typist
        className={styles.typist}
        avgTypingDelay={1}
        stdTypingDelay={10}
        cursor={{
          show: true,
          blink: false,

          element: '_',
          hideWhenDone: false,
          hideWhenDoneDelay: 1000
        }}
      >
        <span className={styles.fontAnimated}>
          Activating the registration for current User. Please wait...
        </span>
        <br />
        <span className={styles.fontAnimated}>
          01010011 01010100 01001111 01010010 01001101 00100000 01001000
          01000001 01000011 01001011 01010011 00100001
        </span>
        <br />
        <span className={styles.fontAnimated}>Processing </span>
        <Typist.Delay ms={200} />
        <span className={styles.fontAnimated}> . </span>
        <Typist.Delay ms={200} />
        <span className={styles.fontAnimated}> . </span>
        <Typist.Delay ms={200} />
        <span className={styles.fontAnimated}> . </span>
        <Typist.Delay ms={200} />
        <span className={styles.fontAnimated}> . </span>
        <br />
        <span className={styles.fontAnimated}> Done! </span>
      </Typist>
    </div>
  )
}
export default CommandLine
