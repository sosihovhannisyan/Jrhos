import { useEffect, useState } from 'react';
import { AllProducts } from '../../AllProducts'

const Data = (category) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const products = () => {
            if (category === "Ամբողջ տեսականին") {
                return AllProducts
            } else if (category === "Ամենավաճառված") {
                return AllProducts.filter(elm => elm.best === "Ամենավաճառված")
            }
            return AllProducts.filter(elm => elm.category === category)
        }
        setProducts(products)

    }, [category]);

    return products;
}

export default Data;