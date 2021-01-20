import { useState, useEffect } from 'react'
import styles from '../css/CountdownTimer.module.css'

const calculateTimeLeft = dueDate => {
  let difference = +new Date(`${dueDate}`) - +new Date()
  let timeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toLocaleString(
        'en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        }
      ),
      minutes: Math.floor((difference / 1000 / 60) % 60).toLocaleString(
        'en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        }
      ),
      seconds: Math.floor((difference / 1000) % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    }
  }

  return timeLeft
}

const CountdownTimer = ({ dueDate, title }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dueDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dueDate))
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <p className={styles.title}>{title}</p>
        <p className={styles.days}>
          {timeLeft.days} {timeLeft.days === 1 ? `day` : `days`}
        </p>
        <p className={styles.timer}>
          {timeLeft.hours} {timeLeft.hours === '01' ? `hr` : `hrs`},{' '}
          {timeLeft.minutes} {timeLeft.minutes === '01' ? `min` : `mins`},{' '}
          {timeLeft.seconds} s
        </p>
      </div>
    </div>
  )
}

export default CountdownTimer
