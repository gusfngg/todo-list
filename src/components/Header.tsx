import styles from './Header.module.css'
import Logo from '../assets/LogoWrite.svg'

export function Header() {
   return (
      <header className={styles.header}>
         <img src={Logo} alt="logotipo da to-do"/>
      </header>
   )
}