import style from './BigCard.module.css'
import {useState, useEffect} from "react";
import {photos} from "../../../../../photos.js";

export default function BigCard({image, title, paragraph, price, duration, description}) {
    const [popup, setPopup] = useState(false)

    useEffect(() => {
        if (popup) {
            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            document.body.dataset.scrollPosition = scrollY;
        } else {
            const scrollPosition = document.body.dataset.scrollPosition;

            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            if (scrollPosition) {
                window.scrollTo(0, parseInt(scrollPosition));
                delete document.body.dataset.scrollPosition;
            }
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [popup]);
    const handlePopup = () =>{
        setPopup(prev => !prev)
    }
    return (
        <>
            <div onClick={handlePopup} className={style.for_grid}>
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
            {popup && (
                <div className={style.overflow}>
                    <div className={style.popup}>
                        <div className={style.popup__top}>
                            <div onClick={handlePopup} className={style.popup__top__close}>
                                <div className={style.line}></div>
                                <div className={style.line} style={{rotate: '90deg'}}></div>
                            </div>
                        </div>
                        <div className={style.popup__bottom}>
                            <div className={style.popup__bottom__info}>
                                <img src={image} alt=""/>
                                <h1>{title}</h1>
                                <p>{paragraph}</p>
                                <p>{description}</p>
                                <p>{description}</p>
                                <p>{description}</p>
                            </div>
                            <div className={style.popup__bottom__buy}>
                                <div className={style.popup__bottom__buy__cont}>
                                    <img src={photos.qr} alt=""/>
                                    <p>{duration}</p>
                                    <span>{price} ₽</span>
                                    <button>Купить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}