import Nav from '../Nav'
import Header from '../Header'
import Carousel from '../Carousel'
import Footer from '../Footer'
import styles from './style.module.scss'
import facebook from './facebook.png'
import instagram from './instagram.png'

const Contact = () => {

    return (
        <div>
            <Nav />
            <Header />
            <h1>Կապ մեզ հետ</h1>
            <div className={styles.contact}>
                <h2>Մեր հեռախոսահամարը</h2>
                <p>Viber, WhatsApp, Telegram +374 (91) 958 111</p>
                <h2>Մենք սոցիալական կայքերում</h2>
                <a href='https://www.facebook.com/jrhos.gifts.accessories' target="_blank">
                    <img src={facebook} />
                    Jrhos gifts & accessories
                </a>
                <a href='https://www.instagram.com/jrhos.gifts.accessories/' target="_blank">
                    <img src={instagram} />
                    Jrhos gifts & accessories
                </a>
                <h2>Մեր էլեկտրոնային հասցեն</h2>
                <p>jrhos@inbox.ru</p>
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
export default Contact;