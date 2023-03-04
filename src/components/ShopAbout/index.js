import Nav from '../Nav'
import Header from '../Header'
import Carousel from '../Carousel'
import Footer from '../Footer'
import styles from './style.module.scss'

const ShopAbout = () => {

    return (
        <div >
            <Nav />
            <Header />
            <h1>Մեր մասին</h1>
            <div className={styles.shopAbout}>
                <p>«Ջրհոս»-ը առաջարկում է զարդերի, աքսեսուարների, նվերների բազմավոճ և առկա տեսականի:</p>
                <p>Առաքում ենք ամբողջ աշխարհում:</p>
                <p>Ընդունվում են անհատական պատվերներ ցանկացած նկարներով, Ձեր նախընտրած դիզայնով:</p>
                <p>Անհատական պատվերները պատրաստ են լինում 1-3 օրվա ընթացքում: Համեցեք:</p>
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
export default ShopAbout;