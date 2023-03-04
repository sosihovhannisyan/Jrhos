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

    const [category, setCategory] = useState("Ամբողջ տեսականին")
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

    const onFilter1 = useCallback(() => {
        setCategory("Ամբողջ տեսականին")
    }, [])

    const onFilter2 = useCallback(() => {
        setCategory("Նկարով")
    }, [])

    const onFilter3 = useCallback(() => {
        setCategory("Ծաղիկներ")
    }, [])

    const onFilter4 = useCallback(() => {
        setCategory("Հավաքածուներ")
    }, [])

    const onFilter5 = useCallback(() => {
        setCategory("Վզնոցներ")
    }, [])

    const onFilter6 = useCallback(() => {
        setCategory("Ականջօղեր")
    }, [])

    const onFilter7 = useCallback(() => {
        setCategory("Թևնոցներ")
    }, [])

    const onFilter8 = useCallback(() => {
        setCategory("Մատանիներ")
    }, [])

    const onFilter9 = useCallback(() => {
        setCategory("Կրծքազարդեր")
    }, [])

    const onFilter10 = useCallback(() => {
        setCategory("Բրելոկներ")
    }, [])

    const onFilter11 = useCallback(() => {
        setCategory("Գլխազարդեր")
    }, [])

    const onFilter12 = useCallback(() => {
        setCategory("Գոտի")
    }, [])

    const onFilter13 = useCallback(() => {
        setCategory("Գլխարկներ")
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
            <Filter onFilter1={onFilter1}
                onFilter2={onFilter2}
                onFilter3={onFilter3}
                onFilter4={onFilter4}
                onFilter5={onFilter5}
                onFilter6={onFilter6}
                onFilter7={onFilter7}
                onFilter8={onFilter8}
                onFilter9={onFilter9}
                onFilter10={onFilter10}
                onFilter11={onFilter11}
                onFilter12={onFilter12}
                onFilter13={onFilter13}
            />
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