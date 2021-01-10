import styles from '../css/SocialsIcons.module.css'
const socials = [
  { link: 'mailto:info@stormhacks.com', className: 'mail' },
  { link: 'https://github.com/sfusurge', className: 'github' },
  { link: 'https://www.instagram.com/sfusurge/', className: 'instagram' },
  { link: 'https://www.facebook.com/sfusurge', className: 'facebook' },
  { link: 'https://www.linkedin.com/company/sfu-surge/', className: 'linkedin' }
]
const SocialsIcons = props => {
  return (
    <div className={styles.container}>
      {socials.map(social => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <div className={styles[social.className]} />
        </a>
      ))}
    </div>
  )
}

export default SocialsIcons
