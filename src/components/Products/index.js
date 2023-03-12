import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import Nav from '../Nav'
import Header from '../Header'
import Filter from '../Filter'
import Sort from '../Sort'
import Footer from '../Footer'
import styles from './style.module.scss'
import Data from '../Data'

const Products = () => {

    const [category, setCategory] = useState("AllProducts")
    const [minMax, setMinMax] = useState([])
    const [sortText, setSortText] = useState("Mix")
    const navigate = useNavigate()
    const products = Data(category)

    const onMin = useCallback(() => {
        setSortText("min")
    }, [])

    const onMax = useCallback(() => {
        setSortText("max")
    }, [])

    useEffect(() => {
            if (sortText === "min") {
                const max = products.sort((a, b) => b.price - a.price)
                setMinMax([...max])
            }
            else if (sortText === "max") {
                const min = products.sort((a, b) => a.price - b.price)
                setMinMax([...min])
            }
    }, [sortText])

    return (
        <div>
            <Nav />
            <Header />
            <h1> Ամբողջ տեսականին </h1>
            <p className={styles.length}>Առկա ապրանքատեսակ {products.length}</p>
            <Filter onFilter={(text) => setCategory(text)} />
            <Sort onMax={onMax}
                  onMin={onMin} />
            <div className={styles.productsMain}>
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
                }
            </div>
            <Footer />
        </div>
    )
}
export default Products