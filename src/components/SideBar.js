import styles from '../css/SideBar.module.css'
import SideBarEvent from './SideBarEvent'

const workshops = [
  {
    date: 'January 15th 2021',
    events: [
      {
        img: 'stormyFace',
        eventName: 'HACK 101: Introduction to Hackathons',
        eventTime: 'Zoom @ 5:30-7:00pm',
        link: 'https://lu.ma/wmvm1ny4'
      }
    ]
  },
  {
    date: 'January 29th 2021',
    events: [
      {
        img: 'github',
        eventName: 'GEAR 201: Git Ready for Success',
        eventTime: 'Zoom @ 5:30-7:00pm',
        customStyle: { cursor: 'default' }
      }
    ]
  },
  // {
  //   date: 'February 3rd 2021',
  //   events: [
  //     {
  //       img: 'design',
  //       eventName: 'Create 101',
  //       eventTime: 'Zoom @ 5:30p-7:00p',
  //       customStyle: { cursor: 'default' }
  //     }
  //   ]
  // },
  // {
  //   date: 'February 5th 2021',
  //   events: [
  //     {
  //       img: 'webDev',
  //       eventName: 'Intro to Web Dev',
  //       eventTime: 'Zoom @ 5:30p-7:00p',
  //       customStyle: { cursor: 'default' }
  //     }
  //   ]
  // },
  // {
  //   date: 'February 10th 2021',
  //   events: [
  //     {
  //       img: 'react',
  //       eventName: 'Intro to React and Hooks',
  //       eventTime: 'Zoom @ 5:30p-7:00p',
  //       customStyle: { cursor: 'default' }
  //     }
  //   ]
  // },
  // {
  //   date: 'February 12th 2021',
  //   events: [
  //     {
  //       img: 'android',
  //       eventName: 'Intro to Android Studio',
  //       eventTime: 'Zoom @ 5:30p-7:00p',
  //       customStyle: { cursor: 'default' }
  //     }
  //   ]
  // }
]

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Schedule</p>
      </div>
      {workshops.map(({ date, events }) => (
        <SideBarEvent key={date} date={date} events={events} />
      ))}
    </div>
  )
}

export default SideBar
