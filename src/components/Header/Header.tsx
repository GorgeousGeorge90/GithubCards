import styles from  './Header.module.scss'
import {ThemeSwitcher} from "../ThemeSwitcher";


export const Header = () => {
 return (
     <div className={styles.header}>
         <div className={styles.logo}>
            GitHub Cards
         </div>
         <ThemeSwitcher/>
  </div>
 )
}
