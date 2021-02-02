import styles from '../css/SideBar.module.css'
import ApplicationTimer from './ApplicationTimer'
import SideBarEvent from './SideBarEvent'

const workshops = [
  {
    date: 'February 3rd 2021',
    events: [
      {
        img: 'design',
        eventName: 'CREATE 101: Intro to Figma',
        eventTime: 'Zoom @ 5:30-7:00pm',
        link: 'https://lu.ma/r5va5kld'
      }
    ]
  },
  {
    date: 'February 4th 2021',
    events: [
      {
        img: 'webDev',
        eventName: 'DEV101W: Intro to Web Dev',
        eventTime: 'Zoom @ 5:30-7:00pm',
        link: 'https://lu.ma/r5va5kld'
      }
    ]
  },
  {
    date: 'February 9th 2021',
    events: [
      {
        img: 'react',
        eventName: 'REACT201: Intro to React and Hooks',
        eventTime: 'Zoom @ 5:30-7:00pm',
        link: 'https://lu.ma/wk8cwah3'
      }
    ]
  },
  {
    date: 'February 13th 2021',
    events: [
      {
        img: 'android',
        eventName: 'DEV101M: Intro to Android Studio',
        eventTime: 'Zoom @ 1:00-2:30pm',
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
