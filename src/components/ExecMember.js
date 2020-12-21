import styles from '../css/ExecMember.module.css'
const ExecMember = ({ name, src, width, height, link, customStyle }) => {
  console.log(link)
  return (
    <>
      <a
        className={styles.link}
        style={customStyle}
        target='_blank'
        rel='noreferrer'
        href={link}
      >
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
      </a>
    </>
  )
}

export default ExecMember
