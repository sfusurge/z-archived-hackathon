import styles from "../css/FaqQuestions.module.css";
import downArrow from "../assets/faqDropDownIcon.svg"
import React, {useState} from 'react'

const FaqQuestions = props => {
  const [dropDown, setDropDownState] = useState(false);

  const toggleDropDown = () => {
    return(
        setDropDownState(!dropDown)
    )
  }
    
  return (
    <div className={styles.container} onClick={toggleDropDown}>
      <div className={styles.question}>
        <div className={styles.text}>
          <p>{props.question}</p>
        </div>
        <div className={styles.arrow}>
          <img src={downArrow} alt="Drop Down"/>
        </div>
      </div>
     
      
      {dropDown && <div className={styles.answer}>
        <p>{props.answer}</p>
      </div>}
    </div>
    )
  }
  

  export default FaqQuestions