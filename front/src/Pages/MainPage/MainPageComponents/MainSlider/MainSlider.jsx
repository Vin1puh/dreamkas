import style from './MainSlider.module.css';
import { photos } from "../../../../photos.js";
import { useState } from 'react';

export default function MainSlider({ slides }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentSlide = slides[currentIndex];

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsAnimating(false), 500); // Время должно совпадать с длительностью анимации
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <section className={style.slider}>
            <div className={style.slider__container}>
                <img
                    onClick={prevSlide}
                    className={`${style.arrow} ${isAnimating ? style.disabled : ''}`}
                    style={{rotate: '180deg'}}
                    src={photos.arrow}
                    alt="Предыдущий"
                />

                <div className={style.slider__container__wrapper} key={currentIndex}>
                    <div className={style.info}>
                        {currentSlide.invest_pole && (
                            <img src={currentSlide.invest_pole} alt=''/>
                        )}
                        <h1>{currentSlide.title}</h1>
                        <p>{currentSlide.paragraph}</p>
                        <div className={style.buttons}>
                            <button className={style.button_1}>
                                {currentSlide.button_1}
                            </button>
                            <button className={style.button_2}>
                                {currentSlide.button_2}
                            </button>
                        </div>
                    </div>
                    <img src={currentSlide.image} alt='' className={style.slideImage}/>
                </div>

                <img
                    onClick={nextSlide}
                    className={`${style.arrow} ${isAnimating ? style.disabled : ''}`}
                    src={photos.arrow}
                    alt="Следующий"
                />
            </div>
            <div className={style.pagination}>

            </div>
            <div className='low_space'></div>
        </section>
    );
}