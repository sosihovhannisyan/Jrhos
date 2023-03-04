import { useState, memo} from 'react'
import { Link} from "react-router-dom"
import styles from './style.module.scss'
import menu from './menu.png'
import x from "./x.png"

export default memo(function Nav() {

    const [menuClose, setMenuClose] = useState(true)

    const menuClick = () => {
        menuClose ? setMenuClose(false) : setMenuClose(true);
    };

    return (
        <div>
            <div className={styles.nav1}>
                <div className={styles.menuClick}>
                    {menuClose ? (
                        <img src={menu} className={styles.menuicon} onClick={menuClick}></img>
                    ) : (
                        <img src={x} className={styles.menuicon} onClick={menuClick}></img>
                    )}
                </div>
                <Link to='/shop' className={styles.navCenter}>
                    Գլխավոր էջ
                </Link>
                <Link to='/products' className={styles.navCenter}>
                    Ամբողջ տեսականին
                </Link>
                <Link to='/shopabout' className={styles.navCenter}>
                    Մեր մասին
                </Link>
                <Link to='/deliver' className={styles.navCenter}>
                    Առաքում
                </Link>
                <Link to='/contact' className={styles.navCenter}>
                    Կապ մեզ հետ
                </Link>
                <div> +374 (91) 958 111 </div>
            </div>
            {menuClose ? (
                <div></div>
            ) : (
                <div className={styles.nav}>
                    <Link to='/shop'>
                        Գլխավոր էջ
                    </Link>
                    <Link to='/products' >
                        Ամբողջ տեսականին
                    </Link>
                    <Link to='/shopabout'>
                        Մեր մասին
                    </Link>
                    <Link to='/deliver' >
                        Առաքում
                    </Link>
                    <Link to='/contact' >
                        Կապ մեզ հետ
                    </Link>

                </div>)
            }
        </div>
    )
})