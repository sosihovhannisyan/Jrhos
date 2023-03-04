import { React } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductAbout from './components/ProductAbout'
import ShopAbout from './components/ShopAbout'
import Products from './components/Products'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Deliver from './components/Deliver'
import styles from './styles/global.scss';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');


export const MyRoutes = () => {

    return (
        <BrowserRouter basename={baseUrl } >
                <Routes >
                    <Route exact path={baseUrl} element={<Shop />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/shopabout' element={<ShopAbout />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/deliver' element={<Deliver />} />
                    <Route path='/product/about/:kod' element={<ProductAbout />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
        </BrowserRouter>
    )
}