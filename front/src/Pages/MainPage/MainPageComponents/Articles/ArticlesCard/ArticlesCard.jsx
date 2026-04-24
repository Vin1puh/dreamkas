import style from './ArticlesCard.module.css';

export default function ArticlesCard({number, image, title, paragraph}) {

    return (
        <div className={style.card} style={{gridArea: `card${number}`}}>
                <img src={image} alt=""/>
                <div className={style.card__text}>
                    {number === 0 ? (
                        <>
                            <h1>{title}</h1>
                            <p>{paragraph}</p>
                        </>
                    ) : (
                        <h2>{title}</h2>
                    )}
                </div>
        </div>
    )
}