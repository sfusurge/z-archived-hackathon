import styles from '../css/SideBar.module.css'
import CountdownTimer from './CountdownTimer'
import SideBarEvent from './SideBarEvent'

const workshops = [
  {
    date: 'January 29th 2021',
    events: [
      {
        img: 'github',
        eventName: 'GEAR 201: Git Ready for Success',
        eventTime: 'Zoom @ 5:30-7:00pm',
        link: 'https://lu.ma/skwobbnd'
      }
    ]
  },
  {
    date: 'February 3rd 2021',
    events: [
      {
        img: 'design',
        eventName: 'CREATE 101: Intro to Figma',
        eventTime: 'Zoom @ 5:30-7:00pm',
        customStyle: { cursor: 'default' }
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
        customStyle: { cursor: 'default' }
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
        customStyle: { cursor: 'default' }
      }
    ]
  },
  {
    date: 'February 13th 2021',
    events: [
      {
        img: 'android',
        eventName: 'DEV101M: Intro to Android Studio',
        eventTime: 'Zoom @ 5:30-7:00pm',
        customStyle: { cursor: 'default' }
      }
    ]
  }
]

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Schedule</p>
      </div>
      <CountdownTimer dueDate="01/24/2021" title="Applications close in:" />
      {workshops.map(({ date, events }) => (
        <SideBarEvent key={date} date={date} events={events} />
      ))}
    </div>
  )
}

export default SideBar
