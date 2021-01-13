import styles from '../css/Sponsor.module.css'

const Sponsor = ({ name, src, width, height, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <img
          className={styles.img}
          src={src}
          width={width}
          height={height}
          alt={`Logo of ${name}`}
        />
      </div>
    </a>
  )
}

export default Sponsor
