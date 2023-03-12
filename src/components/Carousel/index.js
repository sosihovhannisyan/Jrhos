import { React, useEffect, useState, memo } from 'react';
import { useNavigate } from "react-router-dom"
import { AllProducts } from '../../AllProducts'
import styles from './style.module.scss'
import next from './next.png'
import previous from './previous.png'

export default memo(function Carousel() {

    const [carousel, setCarousel] = useState([])
    const [index, setIndex] = useState(1);
    const length = 4;
    const navigate = useNavigate()

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    useEffect(() => {
        const carousel = () => {
            return AllProducts.filter(elm => elm.index == index)
        }
        setCarousel(carousel)
    }, [index])

    return (
        <div className={styles.carouselMain}>
            <h2>Հատուկ առաջարկներ</h2>
            <div className={styles.carousel}>
                <img src={previous} className={styles.icon} onClick={handlePrevious}></img>
                <div className={styles.carouselProducts }>
                    {
                    carousel.map(elm => (
                        <div key={elm.kod} className={styles.product} onClick={() => navigate("/product/about/" + elm.kod)}>
                            <img src={elm.photo} />
                            <p className={styles.price}>{elm.price + " " + "դրամ"}</p>
                            <p className={styles.kod}>{'Ապրանքի կոդ՝' + ' ' + elm.kod}</p>
                        </div>
                      ))
                    }
                </div>
                <img src={next} className={styles.icon} onClick={handleNext}></img>
            </div>
        </div>
    )
})