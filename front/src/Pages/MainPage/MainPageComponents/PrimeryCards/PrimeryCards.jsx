import style from './PrimeryCards.module.css';
import BigCard from "./BigCard/BigCard.jsx";

export default function PrimeryCards({primeryCardData}) {
    return (
        <>
            <section className={style.primery}>
                <div className={style.primery__container}>
                    <h1>Решения для торговли</h1>
                    <div className={style.primery__container__grid}>
                        {primeryCardData.map((item, index) => (
                            <BigCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
            <div className="low_space"></div>
        </>
    )
}