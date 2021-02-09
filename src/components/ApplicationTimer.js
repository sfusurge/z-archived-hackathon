import { useState, useEffect } from 'react'
import { calculateTimeLeft, formatDoubleDigitTime } from '../utils/timeLeft'
import styles from '../css/CountdownTimer.module.css'

const getTime = dueDate => {
  const timeLeft = calculateTimeLeft(dueDate)

  if (timeLeft) {
    timeLeft.hours = formatDoubleDigitTime(timeLeft.hours)
    timeLeft.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeLeft.seconds = formatDoubleDigitTime(timeLeft.seconds)
  }

  return timeLeft
}

const ApplicationTimer = () => {
  const dueDate = '2021-02-20T20:00:00Z'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <>
          <p className={styles.title}>Countdown to StormHacks:</p>
          <p className={styles.days}>
            {timeLeft.days} {timeLeft.days === 1 ? `day` : `days`}
          </p>
          <p className={styles.timer}>
            {timeLeft.hours} {timeLeft.hours === '01' ? `hr` : `hrs`},{' '}
            {timeLeft.minutes} {timeLeft.minutes === '01' ? `min` : `mins`},{' '}
            {timeLeft.seconds} s
          </p>
        </>
      </div>
    </div>
  )
}

export default ApplicationTimer
