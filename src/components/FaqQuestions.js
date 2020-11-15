import styles from "../css/FaqQuestions.module.css"
import downArrow from "../assets/faqDropDownIcon.svg"

const FaqQuestions = props => {
 
  const toggleDropDown = () => {
    if (props.isOpen){
      return props.setOpen(-1)
    }
    return(
        props.setOpen(props.id)
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
     
      
      {props.isOpen && <div className={styles.answer}>
        <p>{props.answer}</p>
      </div>}
    </div>
    )
  }
  

  export default FaqQuestions