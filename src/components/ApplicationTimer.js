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
  const dueDate = '01/25/2021'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        {timeLeft ? (
          <>
            <p className={styles.title}>Applications close in:</p>
            <p className={styles.days}>
              {timeLeft.days} {timeLeft.days === 1 ? `day` : `days`}
            </p>
            <p className={styles.timer}>
              {timeLeft.hours} {timeLeft.hours === '01' ? `hr` : `hrs`},{' '}
              {timeLeft.minutes} {timeLeft.minutes === '01' ? `min` : `mins`},{' '}
              {timeLeft.seconds} s
            </p>
          </>
        ) : (
          <>
            <p className={styles.title}>Applications are now</p>
            <p className={styles.days}>CLOSED</p>
            <p className={styles.timer}>Acceptances out Feb 5th</p>
          </>
        )}
      </div>
    </div>
  )
}

export default ApplicationTimer
