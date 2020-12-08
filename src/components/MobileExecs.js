import ExecMember from './ExecMember'
import praneer from '../assets/execs/praneer.svg'
import grace from '../assets/execs/grace.svg'
import noble from '../assets/execs/noble.svg'
import vivian from '../assets/execs/vivian.svg'
import naomi from '../assets/execs/naomi.svg'
import isshan from '../assets/execs/isshan.svg'
import david from '../assets/execs/david.svg'
import revika from '../assets/execs/revika.svg'
import nargis from '../assets/execs/nargis.svg'
import harry from '../assets/execs/harry.svg'
import shubham from '../assets/execs/shubham.svg'
import emma from '../assets/execs/emma.svg'
import ali from '../assets/execs/ali.svg'
import fiona from '../assets/execs/fiona.svg'
import steven from '../assets/execs/steven.svg'
import jocelyn from '../assets/execs/jocelyn.svg'
import michelle from '../assets/execs/michelle.svg'
import lauren from '../assets/execs/lauren.svg'
import nathan from '../assets/execs/nathan.svg'
import karren from '../assets/execs/karren.svg'
import art from '../assets/execs/art.svg'
import josh from '../assets/execs/josh.svg'
import jeffrey from '../assets/execs/jeffrey.svg'
import hilal from '../assets/execs/hilal.svg'
import styles from '../css/MobileExec.module.css'

const execs = [
  {
    src: praneer,
    width: '100px',
    height: '100px',
    name: 'PraneerShrestha.png'
  },
  { src: grace, width: '100px', height: '100px', name: 'GraceLuo.gif' },
  { src: noble, width: '100px', height: '100px', name: 'NobleTan.gif' },
  { src: vivian, width: '100px', height: '100px', name: 'VivianWong.tiff' },
  { src: naomi, width: '100px', height: '100px', name: 'NaomiTran.gif' },
  { src: isshan, width: '100px', height: '100px', name: 'IshaanBedi.png' },
  { src: david, width: '100px', height: '100px', name: 'DavidLowe.jpeg' },
  { src: revika, width: '100px', height: '100px', name: 'RevikaJain.png' },
  { src: nargis, width: '100px', height: '100px', name: 'NargisGhiasi.tiff' },
  { src: harry, width: '100px', height: '100px', name: 'HarryPreetSingh.png' },
  { src: shubham, width: '100px', height: '100px', name: 'ShubhamNegi.png' },
  { src: emma, width: '100px', height: '100px', name: 'EmmaWu.jpeg' },
  { src: ali, width: '100px', height: '100px', name: 'AliKhamesy.png' },
  { src: fiona, width: '100px', height: '100px', name: 'FionaWu.png' },
  { src: steven, width: '100px', height: '100px', name: 'StevenZhu.jpg' },
  { src: jocelyn, width: '100px', height: '100px', name: 'JocelynGau.png' },
  {
    src: michelle,
    width: '100px',
    height: '100px',
    name: 'MichelleSwolfs.svg'
  },
  { src: lauren, width: '100px', height: '100px', name: 'LaurenMok.svg' },
  { src: nathan, width: '100px', height: '100px', name: 'NathanLew.svg' },
  { src: karren, width: '100px', height: '100px', name: 'KarrenSusanto.png' },
  { src: art, width: '100px', height: '100px', name: 'ArtYang.jpeg' },
  { src: josh, width: '100px', height: '100px', name: 'JoshPeng.png' }
]

const MobileExecs = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Meet The Execs</p>
      <div className={styles.execContainer}>
        {execs.map((exec, i) => (
          <div className={styles.execs}>
            <ExecMember
              src={exec.src}
              width={exec.width}
              height={exec.height}
              name={exec.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileExecs
