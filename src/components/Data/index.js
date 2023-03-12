import { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts'

const Data = (category) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const products = () => {
            if (category === "AllProducts") {
                return AllProducts
            } else if (category === "BestSeller") {
                return AllProducts.filter(elm => elm.best === "BestSeller")
            }
            return AllProducts.filter(elm => elm.category === category)
        }
        setProducts(products)

    }, [category]);

    return products;
}

export default Data;