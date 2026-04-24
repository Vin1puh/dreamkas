import style from './SoldSlider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css'

export default function SoldSlider({soldSliderData}) {
    return (
        <>
            <section className={style.slider}>
                <Swiper
                    className={style.swiper}
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    speed={1000}
                    loop={true}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                >
                    {soldSliderData.map((item, index) => (
                        <SwiperSlide className={style.slide} key={index}>
                            <img src={item.image} alt=""/>
                            <a>{item.title}</a>
                            <p>{item.price} ₽</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <div className="low_space"></div>
        </>
    )
}