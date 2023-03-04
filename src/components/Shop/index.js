import { useNavigate } from "react-router-dom"
import Header from '../Header'
import Nav from '../Nav'
import Carousel from '../Carousel'
import Footer from '../Footer'
import styles from './style.module.scss'
import brelok from './brelok.jpg'
import kulonner from './kulonner.jpg'
import caxik from './caxik.jpg'
import brelokN from './brelokN.jpg'
import arvest from './arvest.jpg'
import Data from '../Data'


const Shop = () => {

    const navigate = useNavigate()

    const products = Data("Ամենավաճառված")

    return (
        <div >
            <Nav />
            <Header />
            <div className={styles.main}>
                <Carousel />
                <div className={styles.mainCenter}>
                    <div className={styles.main1}>
                        <img src={brelok} />
                        <div>
                            <p>Հայկական շունչը մեր զարդերում</p>
                            <p>Նկարը՝ Մարտիրոս Սարյան «Հայաստան»</p>
                            <p>Կարող եք պատվիրել ցանկացած նկարով</p>
                            <button onClick={() => navigate("/products")}>Ամբողջ տեսականին</button>
                        </div>
                    </div>

                    <div className={styles.main2}>
                        <div>
                            <p>Լավագույն նվերները Ձեր սիրելիներին</p>
                            <p>Կուլոններ՝ բացվող-փակվող</p>
                            <p>Կարող եք պատվիրել ցանկացած նկարներով</p>
                            <button onClick={() => navigate("/products")}>Ամբողջ տեսականին</button>
                        </div>
                        <img src={kulonner} />
                    </div>

                    <div className={styles.main3}>
                        <img src={caxik} />
                        <div>
                            <p>Բնության շունչը մեր զարդերում</p>
                            <p>Ձեր ամենանուրբ և սիրուն ընտրությունը</p>
                            <p>Զարդերը պատրաստված են բնական ծաղիկներից</p>
                            <button onClick={() => navigate("/products")}>Ամբողջ տեսականին</button>
                        </div>
                    </div>

                    <div className={styles.main4}>
                        <div>
                            <p>Եղե՛ք օրիգինալ և տարբերվե՛ք Ձեր նվերով</p>
                            <p>Փոքրիկ բրելոկ-ֆոտոալբոմ</p>
                            <p>Կարող եք պատվիրել ցանկացած նկարներով</p>
                            <button onClick={() => navigate("/products")}>Ամբողջ տեսականին</button>
                        </div>
                        <img src={brelokN} />
                    </div>
                    <div className={styles.main5}>
                        <img src={arvest} />
                        <div>
                            <p>Արվեստի շունչը մեր զարդերում</p>
                            <p>Նկարը՝ Վինսենթ վան Գոգ «Աստղալից գիշեր»</p>
                            <p>Կարող եք պատվիրել ցանկացած նկարներով</p>
                            <button onClick={() => navigate("/products")}>Ամբողջ տեսականին</button>
                        </div>
                    </div>
                </div>
                <h2>Ամենավաճառված տեսակները</h2>
                <div className={styles.best}>
                    {
                        products.map(elm => (
                            <div key={elm.kod} className={styles.product} onClick={() => navigate("/product/about/" + elm.kod)}>
                                <img src={elm.photo} />
                                <p className={styles.model}>{elm.model}</p>
                                <p className={styles.priceS}>{elm.priceS}</p>
                                <p className={styles.price}>{elm.price + " " + "դրամ"}</p>
                                <p className={styles.kod}>{'Ապրանքի կոդ՝' + ' ' + elm.kod}</p>
                            </div>
                        ))
                    } </div>

            </div>
            <Footer />
        </div>
    )
}
export default Shop;