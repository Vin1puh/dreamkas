import style from './Articles.module.css';
import ArticlesCard from "./ArticlesCard/ArticlesCard.jsx";
import {NavLink} from "react-router-dom";
import {photos} from "../../../../photos.js";

export default function Articles({ArticlesData}) {

    return (
        <>
            <section className={style.articles}>
                <div className={style.articles__container}>
                    <h1>Статьи для предпринимателей</h1>
                    <div className={style.articles__container__grid}>
                        {ArticlesData.slice(0, 3).map((item, index) => (
                            <ArticlesCard number={index} key={index} {...item} />
                        ))}
                        <NavLink to='' className={style.articles__container__grid__next}>
                            <button>Другие статьи <img src={photos.arrow} alt=""/></button>
                        </NavLink>
                    </div>
                </div>
            </section>
            <div className="low_space"></div>
        </>
    )
}