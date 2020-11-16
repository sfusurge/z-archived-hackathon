import styles from '../css/Banner.module.css'

const Banner = props => {
  return (
    <div className={styles.container} style={{ width: `${props.width}px` }}>
      <img
        className={styles.bannerImage}
        src={props.surge.src}
        alt={props.surge.alt}
        width={props.surge.width}
        height={props.surge.height}
      />
      <img
        className={styles.bannerImage}
        src={props.mlh.src}
        alt={props.mlh.alt}
        width={props.mlh.width}
        height={props.mlh.height}
      />
    </div>
  )
}

export default Banner
