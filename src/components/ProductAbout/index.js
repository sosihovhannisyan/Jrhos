import { useParams } from "react-router-dom"
import { AllProducts } from '../../AllProducts'
import styles from './style.module.scss'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'

const ProductAbout = () => {

    const { kod } = useParams()

    return (
        <div>
            <Nav />
            <Header />
            <div className={styles.main}>
                {
                    AllProducts
                        .filter((product) => product.kod == kod)
                        .map((product) => (
                            <div className={styles.product} key={product.kod}>
                                <div><img src={product.photo1} /></div>
                                <div className={styles.aboutp}>
                                    <h3>{product.model}</h3>
                                    <p className={styles.priceS}>{product.priceS + " " + "դրամ"}</p>
                                    <p className={styles.price}>{product.price + " " + "դրամ"}</p>
                                    <p>{product.about3}</p>
                                    <p>Նկարագրություն.</p>
                                    <p>{"Կոդ՝" + " " + product.kod}</p>
                                    <p>{"Նյութ՝" + " " + product.material}</p>
                                    <p>{product.about1}</p>
                                    <p>{product.about2}</p>
                                    <p>{product.about4}</p>
                                    <p>{product.about5}</p>
                                    <p>{product.about6}</p>
                                    <p>{product.about7}</p>
                                    <p>{product.about8}</p>
                                    <p>{product.about9}</p>
                                    <p>{product.about10}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
            <Footer />
        </div>
    )
}
export default ProductAbout 