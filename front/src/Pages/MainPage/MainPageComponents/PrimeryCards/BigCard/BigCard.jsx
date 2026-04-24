import style from './BigCard.module.css'

export default function BigCard({image, title, paragraph, price, duration}) {
    return (
        <div className={style.for_grid}>
            <div className={style.BigCard}>
                <img src={image} alt=""/>
                <div className={style.BigCard__block}>
                    <div className={style.BigCard__block__text}>
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                    </div>
                    <div className={style.BigCard__block__price}>
                        <p>{duration}</p>
                        <h3>{price} ₽</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}