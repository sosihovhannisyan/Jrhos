import { memo } from "react"
import styles from './style.module.scss'

export default memo(function Filter({ onFilter1, onFilter2, onFilter3, onFilter4, onFilter5, onFilter6, onFilter7, onFilter8, onFilter9, onFilter10, onFilter11, onFilter12, onFilter13 }) {

    return (
        <div className={styles.filter}>
            <button onClick={() => onFilter1()}>
                Ամբողջ տեսականին
            </button>
            <button onClick={() => onFilter2()} >
                Անհատական նկարներով
            </button>
            <button onClick={() => onFilter3()} >
                Բնական ծաղիկներով
            </button>
            <button onClick={() => onFilter4()}>
                Փայլուն հավաքածուներ
            </button>
            <button onClick={() => onFilter5()}>
                Վզնոցներ
            </button>
            <button onClick={() => onFilter6()} >
                Ականջօղեր
            </button>
            <button onClick={() => onFilter7()} >
                Թևնոցներ
            </button>
            <button onClick={() => onFilter8()} >
                Մատանիներ
            </button>
            <button onClick={() => onFilter9()} >
                Կրծքազարդեր
            </button>
            <button onClick={() => onFilter10()} >
                Բրելոկներ
            </button>
            <button onClick={() => onFilter11()} >
                Գլխազարդեր
            </button>
            <button onClick={() => onFilter12()} >
                Գոտիներ և շղթաներ
            </button>
            <button onClick={() => onFilter13()} >
                Գլխարկներ
            </button>
        </div>
    )
})