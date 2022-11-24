import styles from  './ThemeSwitcher.module.scss'

import {ReactComponent as MoonIcon} from './../../assets/icon-moon.svg';
import {ReactComponent as SunIcon} from './../../assets/icon-sun.svg';
import {useEffect, useState} from 'react';

export const ThemeSwitcher = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(()=>{
        document.body.setAttribute('data-theme', darkTheme ? 'dark':'light')
    },[darkTheme])

    const themeText =darkTheme ? 'Dark': 'Light'
    const ThemeIcon =darkTheme ? MoonIcon: SunIcon

    return (
        <div className={styles.switcher} onClick={()=>setDarkTheme(!darkTheme)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon}/>
        </div>
    )
};
