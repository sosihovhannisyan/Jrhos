import { memo } from "react";
import styles from './style.module.scss'

export default memo(function Footer() {

    return (
        <div className={styles.footer}>

            <p>Created by JRHOS © 2023</p>

        </div>
    )
})