import { memo } from "react";
import header from './header.jpg'
import styles from './style.module.scss'

export default memo(function Header() {

    return (
        <div className={styles.header}>

            <img src={header} ></img>

        </div>
    )
})