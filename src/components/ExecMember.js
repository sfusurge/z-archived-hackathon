import styles from '../css/ExecMember.module.css'
const ExecMember = ({ name, src, width, height }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={src}
        width={width}
        height={height}
        alt={`Logo of ${name}`}
      />
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default ExecMember
