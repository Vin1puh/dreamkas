import {photos} from "../../photos.js";
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <nav>
                <div className="nav__left">
                    <div className="choose">
                        <NavLink to='' className="choose__block">
                            <img src={photos.logo} alt=""/> Партнёрам
                        </NavLink>
                        <NavLink to='' className="choose__block">
                            <img src={photos.logo} alt=""/> Поддержка
                        </NavLink>
                        <NavLink to='' className="choose__block">
                            <img src={photos.logo} alt=""/> О Компании
                        </NavLink>
                        <NavLink to='' className="choose__block">
                            <img src={photos.logo} alt=""/> Способы оплаты
                        </NavLink>
                    </div>
                    <div className="kas">
                        <NavLink to=''>Кассовое оборудование</NavLink>
                        <div className="kas__block">
                            <div className="kas__block__bottom">
                                <NavLink className='bold' to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                            </div>
                            <div className="kas__block__bottom">
                                <NavLink className='bold' to=''>Фиксальные регистраторы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                                <NavLink to=''>Кассы</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav__right">
                    <NavLink className='tel' to=''>8 (800) 555-35-35</NavLink>
                    <div className="pic__block">
                        <img src={photos.logo} alt=""/>
                        <img src={photos.logo} alt=""/>
                        <img src={photos.logo} alt=""/>
                    </div>
                    <div className="pic__block">
                        <img src={photos.logo} alt=""/>
                        <img src={photos.logo} alt=""/>
                        <img src={photos.logo} alt=""/>
                    </div>
                    <NavLink to='' className="choose__block">
                        <img src={photos.logo} alt=""/> Поддержка
                    </NavLink>
                    <NavLink to='' className="choose__block">
                        <img src={photos.logo} alt=""/> Поддержка
                    </NavLink>
                </div>
            </nav>
        </footer>
    )
}