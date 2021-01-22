export const calculateTimeLeft = dueDate => {
  let difference = +new Date(`${dueDate}`) - +new Date()
  let timeLeft = null

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

export const formatDoubleDigitTime = time => {
  return time.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}
