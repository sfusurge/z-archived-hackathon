import FAQ from "./FaqQuestions"
import styles from "../css/AllQuestions.module.css"
import {useState} from 'react'

const FAQs1 = [{question: "What is a hackathon?", answer: "This is about the length of a sentence. We want to include about 3 sentences worth of stuff to answer questions. Butter is a healthy and nutritious snack."},
              {question: "Will the hackathon happen virtually or in-person?", answer: "We are excited to be hosting our first virtual hackathon!"},
              {question: "What if I’ve never been to a hackathon?", answer: "Stormhacks welcomes students of all skill levels. Whether you’re a newcomer or a hackathon veteran, we’ll have talks, workshops and mentors to help you with your project throughout the event. By the end of the hackathon, you will have new skills, new friends and a project. All you need to bring is your eagerness to learn and meet awesome people."},
              {question: "What kind of activities will there be?", answer: ""},
              {question: "What platform will you be using to host the event?", answer: ""},
              {question: "How will we recieve swag?", answer: ""}]

const FAQs2 = [{question: "Who can participate?", answer: "Students of any education level are able to apply to Stormhacks, as long as they are still enrolled when the virtual event takes place in February"},
              {question: "How much does it cost to attend Stormhacks?", answer: "Admission to Stormhacks is completely free for those that are eligible. We will provide all resources and mentorships our hackers need to build incredible and impactful projects."},
              {question: "How many people can be on a team?", answer: "You can form teams from up to 2-4 people. Don’t worry if you can’t find a team beforehand, event execs will help you find opportunities to connect with others during the event."},
              {question: "How will communication work during the event?", answer: "All pre-event communications will occur via email, so sign up for the Hack the North 2020++ mailing list! During the event, we’ll be using a mix of our Discord platform and other tools to engage and communicate important information with all attendees"},
              {question: "When do hacker applications open?", answer: ""},
              {question: "404: Questions not found?", answer: ""}]

const AllQuestions = props => {
  const[currentlyOpen, setOpen] = useState(-1)

  return(
    <div className={styles.container}>
      <div className={styles.columns} >
        {FAQs1.map((faq, i) => {
          return <div key={faq.question}>
            <FAQ question={faq.question} answer={faq.answer} 
            isOpen={currentlyOpen===i} id={i} setOpen={setOpen} /></div>
        })}
      </div>
      <div className={styles.columns} >
        {FAQs2.map((faq, i) => {
          return <div key={faq.question}><FAQ question={faq.question} answer={faq.answer} 
          isOpen={currentlyOpen===i+6} id={i+6} setOpen={setOpen} /></div>
        })}
      </div>
      
    </div>
    
  )
}

export default AllQuestions