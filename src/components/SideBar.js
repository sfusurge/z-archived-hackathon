import styles from '../css/SideBar.module.css'
import ApplicationTimer from './ApplicationTimer'
import SideBarEvent from './SideBarEvent'

const workshops = [
  {
    date: 'February 9th 2021',
    events: [
      {
        img: 'react',
        eventName: 'REACT201: Intro to React and Hooks',
        eventTime: 'Zoom @ 5:30-7:00pm PST',
        link: 'https://lu.ma/wk8cwah3'
      }
    ]
  },
  {
    date: 'February 13th 2021',
    events: [
      {
        img: 'echo',
        eventName: 'How to Build a Cloud-Connected AR/VR App',
        eventTime: 'YouTube @ 10:00-10:45am PST',
        link: 'https://www.youtube.com/watch?v=Uo2z8oKzNGk&ab_channel=echoAR'
      },
      {
        img: 'android',
        eventName: 'DEV101M: Intro to Android Studio',
        eventTime: 'Zoom @ 1:00-2:30pm PST',
        link: 'https://lu.ma/bmcnugtm'
      }
    ]
  }
]

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <p className={styles.title}>Schedule</p>
        </div>
        <ApplicationTimer />
        {workshops.map(({ date, events }) => (
          <SideBarEvent key={date} date={date} events={events} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
