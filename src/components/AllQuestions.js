import FAQ from "./FaqQuestions"
import styles from "../css/AllQuestions.module.css";
import {useState} from 'react';

const FAQs = [{question: "What is a hackathon?", answer: "This is about the length of a sentence. We want to include about 3 sentences worth of stuff to answer questions. Butter is a healthy and nutritious snack."},
              {question: "Will the hackathon happen virtually or in person?", answer: ":3"},
              {question: "What???", answer: ":)"}]

const AllQuestions = props => {
    const[currentlyOpen, setOpen] = useState(-1)

    return(
        <div className={styles.container} >
            {FAQs.map((faq, i) => {
                return <div className={styles.question} key={faq.question}><FAQ question={faq.question} answer={faq.answer} 
                isOpen={currentlyOpen===i} id={i} setOpen={setOpen} /></div>
            })}
        </div>
    )
}

export default AllQuestions