import styles from '../css/Sponsor.module.css'

const SponsorsContent = ({ name, src, width, height }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={src}
        width={width}
        height={height}
        alt={`Logo of ${name}`}
      />
    </div>
  )
}

export default SponsorsContent
