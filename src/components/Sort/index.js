import {memo } from "react"
import styles from './style.module.scss'
import asc from './asc.png'
import desc from './desc.png'

export default memo(function Sort ({ onMax, onMin }) {

    return (
        <div>
            <div className={styles.sort}>
                <img src={desc} onClick={() => onMax()} ></img>
                <img src={asc} onClick={() => onMin()}></img>
            </div>
        </div>
    )
})