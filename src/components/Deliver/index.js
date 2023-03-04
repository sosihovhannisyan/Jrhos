import Nav from '../Nav'
import Header from '../Header'
import Carousel from '../Carousel'
import Footer from '../Footer'
import styles from './style.module.scss'

const Deliver = () => {

    return (
        <div >
            <Nav />
            <Header />
            <h1>Առաքման պայմանները</h1>
            <div className={styles.deliver}>
                <p>Առաքումը ամբողջ աշխարհում կատարվում է ՀայՓոստի միջոցով:</p>
                <p>Առաքման արժեքը սկսած 400 դրամից:</p>
                <p>Հայաստանում և Արցախում 15.000 դրամ և ավել գնումների դեպքում անվճար:</p>
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
export default Deliver;