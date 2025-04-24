import styles from './ArrowRight.module.css'
const appUrl = process.env.APP_URL;
const SvgComponent = (props) => (
  <div className={styles.arrowBack}>
      <img src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42} loading='lazy'/>
  </div>
)
export default SvgComponent