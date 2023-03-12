import { memo } from "react"
import styles from './style.module.scss'

export default memo(function Filter({ onFilter }) {

    return (
        <div className={styles.filter}>
            <button onClick={() => onFilter("AllProducts")}>
                Ամբողջ տեսականին
            </button>
            <button onClick={() => onFilter("WithPhoto")} >
                Անհատական նկարներով
            </button>
            <button onClick={() => onFilter("Flowers")} >
                Բնական ծաղիկներով
            </button>
            <button onClick={() => onFilter("Collections")}>
                Փայլուն հավաքածուներ
            </button>
            <button onClick={() => onFilter("Necklaces")}>
                Վզնոցներ
            </button>
            <button onClick={() => onFilter("Earrings")} >
                Ականջօղեր
            </button>
            <button onClick={() => onFilter("Bracelets")} >
                Թևնոցներ
            </button>
            <button onClick={() => onFilter("Rings")} >
                Մատանիներ
            </button>
            <button onClick={() => onFilter("Brooch")} >
                Կրծքազարդեր
            </button>
            <button onClick={() => onFilter("Keychains")} >
                Բրելոկներ
            </button>
            <button onClick={() => onFilter("Headdresses")} >
                Գլխազարդեր
            </button>
            <button onClick={() => onFilter("Belts")} >
                Գոտիներ և շղթաներ
            </button>
            <button onClick={() => onFilter("Hats")} >
                Գլխարկներ
            </button>
        </div>
    )
})