import style from './AboutUs.module.css';
import {photos} from "../../../../photos.js";

export default function AboutUs() {
    return (
        <>
            <section className={style.about}>
                <div className={style.about__container}>
                    <div className={style.about__container__text}>
                        <h1>О нас</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis error inventore,
                            ipsam molestias quam sit. Dolorem est, qui? Possimus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolorum officiis quas qui quod voluptatem.</p>
                        <div className={style.about__container__text__bottom}>
                            <button>о компании</button>
                            <img src={photos.logo} alt=""/>
                        </div>
                    </div>
                    <img src={photos.logo} alt=""/>
                </div>
            </section>
            <div className="low_space"></div>
        </>
    )
}